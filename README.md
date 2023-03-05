# Project : Auction Item

- 프로젝트 기간
    - 2022.10 ~
- 프로젝트 내용
    - 사용자의 물품을 실시간 경매를 통해 거래를 주선하는 플랫폼 개발
- 프로젝트 구조
    - Backend
        - Http
            - Request-Response 구조
            - 상품의 리스트, 상품의 이미지, 유저정보, 유저이미지 정보 제공
        - Tcp
            - 소켓 통신
            - 상품의 실시간 값 변화에 대한 정보 교환
    - Proxy
        - Nginx
            - Http, Tcp 컨테이너에 대한 프록시 기능
- 프로젝트 개발 프로세스
    - 로컬 환경에서 Http, Tcp, Nginx 개발 및 로컬 환경 도커 테스트
    - push to main branch
    - GitAction을 이용하여 CD 구축
    - 이미지
- 원격 서버 환경
    - ![Frame 24 (3)](https://user-images.githubusercontent.com/78067919/222954467-10eeb869-9b00-435e-b770-56a3db3e4a04.png)

- 데이터베이스 엔터티 관계도
    - ![database_development](https://user-images.githubusercontent.com/78067919/222954490-d23610ec-4517-49b4-968e-93c60b521471.png)

