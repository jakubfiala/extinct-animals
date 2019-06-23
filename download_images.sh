#!/usr/bin/env bash
set -o errexit
set -o nounset

while read image
do
    if [ ! -f "$image" ];
    then
        wget -N $image
    else
        echo "SKIPPING $image"
    fi
done < $1
