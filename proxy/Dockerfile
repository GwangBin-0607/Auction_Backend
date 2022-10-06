FROM nginx

# RUN rm /etc/nginx/conf.d/default.conf

COPY nginx.conf /etc/nginx/nginx.conf
COPY index.html /etc/nginx/html/index.html
# CMD nginx
# VOLUME /etc/nginx
# VOLUME /usr/share/nginx/html
CMD [ "nginx","-g","daemon off;" ]
