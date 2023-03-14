# Project : Auction Item

### 🔒 요구사항

> 물건을 단순히 가격을 올리고 그 가격에 맞게 파는 것이 아닌, 물건을 파는 사용자가 시작가격을 측정하고 사는 사용자들이 물건을 실시간으로 경매 함으로써 서로가 만족한 거래를 주선하는 플랫폼 개발
> 
- 실시간으로 가격 정보를 받고 물품을 경매하기 위한 양방향 통신 (TCP/IP Socket)
- 상품 리스트와 상품 이미지를 불러오기 위한 단방향 통신 (HTTP)
- 사용자의 식별을 위한 로그인
- 사용자의 커뮤니케이션을 위한 채팅 기능 양방향 통신 (TCP/IP Socket)

---

### 😀 아키텍쳐

- Cilent - Server Architecture
    
    ![333](https://user-images.githubusercontent.com/78067919/224891473-39b76dc3-ec2a-4296-ab61-03adca74e270.png)
    
    - Nginx Container
        - 포트에 따라 HTTP Container, TCP/IP Socket Container로 프록시
            - 하나의 서버에 docker-compose를 이용하여 Docker Network 구축
            - Container Name을 이용하여 프록시가 가능
    - Node.js HTTP Container
        - Express.js를 이용하여 HTTP RESTful API 개발
            - 제품 리스트 (POST)
            - 제품 이미지 (POST)
            - 상세 제품 데이터 (POST)
        - Router-Service-Repository 패턴
            - Sequelize를 이용하여 RDS 접속 및 데이터 교환
    - Node.js TCP/IP Socket Container
        - net을 이용하여 Socket 통신 구축
            - 소켓의 정보를 배열로 저장하여 가격 변동이 있을때 소켓 상태에 맞게 데이터 전송
        - Router-Transfer-Service-Repository 패턴
            - Sequelize를 이용하여 RDS 접속 및 데이터 교환

---

### 🤘🏻 기능 개발

- `Database 구축`
    
   ![222](https://user-images.githubusercontent.com/78067919/224891463-0e708f3c-1403-4ab7-bce7-89f74b87c663.png)
    
- `Express.js 활용 HTTP RESTful API`
    - 제품 리스트 (Post)
    - 제품 이미지(Post)
    - 상세 제품 데이터(Post)
- `TCP/IP Socket 통신 구축`
- `GitAction For CI/CD`
    - Git Action Diagram
        
        ![111](https://user-images.githubusercontent.com/78067919/224891456-d3832e48-9c54-4381-8204-b417e48e6e0f.png)
