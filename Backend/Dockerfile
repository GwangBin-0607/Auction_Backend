FROM node:carbon

RUN mkdir -p /app

WORKDIR /app

ADD ./ /app

RUN npm install

ENV NODE_ENV=production

CMD npm start

#RUN은 이미지 빌드 단계이며 RUN명령 후 컨테이너 상태는 컨테이너 이미지에 저장됩니다.
#CMD는 빌드 된 이미지를 시작할 때 컨테이너가 기본적으로 실행하는 명령입니다.