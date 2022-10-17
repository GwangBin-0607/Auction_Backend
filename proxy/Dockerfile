FROM nginx

# RUN rm /etc/nginx/conf.d/default.conf
COPY ./entry_test.sh /
COPY nginx_default.conf /etc/nginx/
# COPY nginx_default.conf /etc/nginx/nginx.conf
# COPY nginx_default.conf /etc/nginx/conf.d/default.conf.template
COPY index.html /etc/nginx/html/index.html
RUN chmod a+x ./entry_test.sh
# CMD nginx
# VOLUME /etc/nginx
# VOLUME /usr/share/nginx/html
ENTRYPOINT [ "./entry_test.sh" ]
# ENTRYPOINT [ "nginx","-g" ,"daemon off;" ]
# CMD ["nginx","-g", "daemon off;" ]
