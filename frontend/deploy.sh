#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
git push -f git@github.com:iamArvy/Amos_Transport.git master:gh-pages

# # if you are deploying to https://<USERNAME>.github.io/<REPO> testing
#ssh-keygen -t ed25519 -C "okeseyi5@gmail.com"
# /f/Web Development/works/Serious Stuffs/Amos_Transport/.ssh/id_ed25519
# git push -f git@github.com:iamArvy/portfolio.git master:gh-pages

cd -