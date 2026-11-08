#!/bin/sh
# Runs before nginx starts (the nginx image runs /docker-entrypoint.d/*.sh). The image links the
# public build at /usr/share/nginx/html; the drafts deployment sets SERVE_DRAFTS=1 to serve the
# build that includes draft posts instead.
set -eu
if [ "${SERVE_DRAFTS:-}" = "1" ]; then
  ln -sfn /usr/share/nginx/site-drafts /usr/share/nginx/html
  echo "40-select-site: serving the drafts build"
fi
