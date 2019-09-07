#!/bin/bash

git clone -b ${BRANCH} git://${GH_REPO}

dart2js -O4 -o javascript/teste.js main.dart

cp javascript/teste.js ${REPO}/javascript
cd ${REPO}
git config user.email "travis@travis-ci.org"
git config user.name "travisci"
git remote set-url origin "https://${GITHUB_TOKEN}@${GH_REPO}" ${BRANCH}
git add *
git commit -m "Travis build $TRAVIS_COMMIT pushed to gh-pages"
git push "https://${GITHUB_TOKEN}@${GH_REPO}" ${BRANCH}