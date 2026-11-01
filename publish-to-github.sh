#!/usr/bin/env bash
# Creates the "galactic-wars" repository on YOUR GitHub account and uploads everything.
# Needs: git and GitHub CLI (https://cli.github.com). Run once:  gh auth login
set -e
cd "$(dirname "$0")"
git init -b main
git add .
git commit -m "Galactic Wars - Elite Fleet v3.0.0"
gh repo create galactic-wars --public --source . --remote origin --push \
  --description "Galactic Wars - Elite Fleet Evolution: Scratch space shooter with 20 boss battles. Play offline on Windows, Mac, Linux and mobile."
echo "Done! Next: Settings > Pages > Source: GitHub Actions, then publish a Release (tag v3.0.0) to build the installers."
