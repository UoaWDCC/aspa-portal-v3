#!/bin/sh
set -e

echo "Running database migrations..."
yarn payload migrate

echo "Starting application..."
yarn start