#!/bin/bash

# options
set -e

shopt -s extglob dotglob

# commands
npm run build

git switch build

rm -rf !(dist|.astro|node_modules|.gitignore|.git)

mv dist/* .

rm -rf dist/

git add --all

git commit -m "$(date)"

git push

git switch main
