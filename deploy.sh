#!/usr/bin/env sh

set -e

# build a project
npm run build

# deploy a dist folder to a surge.sh
surge dist --domain regular-bead.surge.sh