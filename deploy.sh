#!/usr/bin/env sh

npm run build
git add -f dist && git commit -m 'update dist subtree'
git subtree push --prefix dist origin gh-pages