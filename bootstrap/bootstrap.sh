#!/bin/bash

# store the current directory
CURRENT_DIR=$(pwd)

# find all the Node.js scripts in the current directory
SCRIPTS=$(find $CURRENT_DIR -type f -name "*.mjs")

# loop through the scripts and run them
for script in $SCRIPTS
do
  zx $script
done
