#!/bin/bash -e 
set -e
lein clean
lein cljsbuild once
git branch -D gh-pages
git checkout -b gh-pages

cp public/index.html ./
cp -r public/css ./
mv public/js ./
git add css js index.html
git commit -m "Deploy to GitHub Pages"
git push  --force --quiet origin gh-pages
git checkout -f master
