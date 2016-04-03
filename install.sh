#!/bin/bash

if [[ "$(node -v)" = "v4.2.3" ]]; then
	npm install -g babel-cli eslint@1.x webpack@2.1.0-beta.4
	npm install
else
	echo "Version is not matched, please install node 4.2.3"
fi
