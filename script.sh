#!/bin/bash

git clone -b ${BRANCH} git://${GH_REPO}
mkdir -p javascript

dart2js -O4 -o javascript/teste.js main.dart

cp javascript/teste.js ${REPO}/javascript
cd ${REPO}
git config user.email "${EMAIL}"
git config user.name "${USER}"
git add *
git commit -m "Travis build $TRAVIS_COMMIT pushed to ${BRANCH}"
git push "https://${GITHUB_TOKEN}@${GH_REPO}" ${BRANCH}