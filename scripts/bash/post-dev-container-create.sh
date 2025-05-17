#!/bin/bash
PATH_TO_BASE=$(realpath "$(dirname "${BASH_SOURCE[0]}")/../../")

# run the command to mark the directory as safe
git config --global --add safe.directory $PATH_TO_BASE

# install all the dependencies
cd $PATH_TO_BASE && yarn install