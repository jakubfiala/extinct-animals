#!/usr/bin/env bash
set -o errexit
set -o nounset

URLS="$(cat $1 | jq -r '.[] | .url')"

for url in $URLS;
do
    if [ ! -z "$url" ]; then
        echo "$(curl -s $url | grep "og:image")" >> $2
    fi
done
