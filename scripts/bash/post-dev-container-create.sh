#!/bin/bash
PATH_TO_BASE=$(realpath "$(dirname "${BASH_SOURCE[0]}")/../../")

# run the command to mark the directory as safe
git config --global --add safe.directory $PATH_TO_BASE

# install all the dependencies
cd $PATH_TO_BASE && yarn install

# install CMS dependencies
cd "$PATH_TO_BASE/cms" && yarn install

# # Start and initialize PostgreSQL server for local CMS development
echo "[post-dev-container-create.sh] Initializing PostgreSQL..."

PGDATA="/var/lib/postgresql/data"
mkdir -p "$PGDATA"
chown -R postgres "$PGDATA"
chmod 700 "$PGDATA"

# Initialize DB if not already done
if [ ! -s "$PGDATA/PG_VERSION" ]; then
  su-exec postgres initdb -D "$PGDATA"
fi

# Start PostgreSQL
mkdir -p /run/postgresql
chown postgres:postgres /run/postgresql
su-exec postgres pg_ctl -D "$PGDATA" -l /var/lib/postgresql/logfile start

# Create the CMS Dev DB (ignore error if it exists)
su-exec postgres createdb cms_dev_db || echo "Database cms_dev_db already exists"