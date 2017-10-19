#!/bin/bash

toIgnore = (
    ".travis.yml"
    "deploy.sh"
    "package.json"
    "gruntfile.js"
    "composer.*"
)

lastCommit=$(git log --format="%H" -n 1)
echo $lastCommit

filesChanged=$(git diff-tree --no-commt-id --name-only -r $lastCommit)

if [ ${#filesChanged[@]} -eq 0 ]; then
    echo "No files to update, aborting..."
    exit 0;
fi

for file in $filesChanged
do

done
