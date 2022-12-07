const net = require('net');
require('dotenv').config();
const port = process.env.TCPPORT;
let clientArray=[];

// const db=require('./Database/models');
// const User = db.product_images;

// const addUser = async () => {
//     let info = {
//         image_url:"222",
//         product_id:2
//     };
  
//     const user = await User.create(info).catch((err) => console.log(err));
//     console.log(JSON.stringify(user));
//   };
//   const list = async ()=>{
//     const result = await db.products.findAll({
//         include:
//         {model:db.product_images}
//         ,
//         plain:true
//     }).catch((err) => console.log(err));
//     console.log(result);
//     return result
//   }
// const list = async ()=>{
//     const result = await db.products.findAll({
//         raw:true,
//         attributes:[['product_id','id'],['product_price','price']]
//     }).catch((err) => console.log(err));
//     console.log(result);
//     return result
//   }

let server = net.createServer(function  (socket) {
	console.log(socket.address() + " connected.");
	socket.setEncoding('utf8');
    clientArray.push(socket)
    const json = [{
        ida : 100,
        price :123123
    }]
    let jsonTwo = `{
        "id" : 1,
        "price" : 1000
    }`;
    // socket.write("hello");
	socket.on('data', function(data) {
        console.log("Connect Data!!!!!Second!!")
		console.log(data);
        console.log(JSON.parse(data).id);
        clientArray.forEach(client=>{
            // let result = await list();
            client.write(JSON.stringify(json));
            // client.write(JSON.stringify(result));
        });
	});
	socket.on('close', function () {
		console.log('client disconnted.');
	});
	setTimeout(() => {
		// socket.write('w111111elcome to server!!!!123!aasdasd!!!');
	}, 500);
});

// print error message
server.on('error', function (err) {
    
	console.log('err: ', err);
});

// listening
server.listen(port, function () {
	console.log('listening on'+port);
});