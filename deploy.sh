#!/usr/bin/env sh

set -e

npm run build

surge dist --domain regular-bead.surge.sh