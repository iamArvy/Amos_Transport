#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

cd dist

git init
git add -A
git commit -m 'deploy'

# eval $(ssh-agent)
# $ ssh-add ~/.ssh/transport_key
git push -f git@github.com:iamArvy/amostransports.git master:gh-pages

cd -