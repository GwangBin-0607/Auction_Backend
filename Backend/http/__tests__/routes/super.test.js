//@ts-check
const request = require('supertest');
const app = require('../../app');

// app.get('/user',(req,res)=>res.status(200).json({name:"Gwangbin"}));
describe('App Test',()=>{
  test('User Route Test',async ()=>{
    // await request(app).get('/products/alllist').expect(200)
    return request(app).post('/products/alllist')
    .send({index:3})
    .expect(200).expect('Content-Type',/json/)
    .then(response => {
      expect(response.body.length).toEqual(0)
    })
    
    
  });
  test('User Route Test Two',async ()=>{
    await request(app).post('/products/productimage').send({imageURL:"/Users/angwangbin/Desktop/Backend/Auction_Backend/Backend/images/nike2.png"})
    .expect(200);
  });
});

