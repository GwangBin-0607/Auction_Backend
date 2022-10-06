FROM nginx

# RUN rm /etc/nginx/conf.d/default.conf

COPY nginx.conf /etc/nginx/nginx.conf
COPY index.html /etc/nginx/html/index.html
# CMD nginx
# VOLUME /etc/nginx
# VOLUME /usr/share/nginx/html
# ENTRYPOINT [ "./docker-entrypoint.sh" ]
CMD ["nginx"," -g", "daemon off;" ]
