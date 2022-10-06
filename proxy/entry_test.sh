#!/usr/bin/env sh
echo "Hello"
export PORT=80
envsubst '${PORT}' < /etc/nginx/nginx_default.conf > /etc/nginx/nginx.conf
nginx -g 'daemon off;'
# exec "$@"