const net = require('net');
require('dotenv').config();
const port = process.env.TCPPORT;
let clientArray=[];
let usecase = require('./usecase/product.price.usecase')

let server = net.createServer(function  (socket) {
	console.log(socket.address() + " connected.");
	socket.setEncoding('utf8');
    clientArray.push(socket)
    const json = [{
        id : 100,
        price :1000000000001
    }]
    let jsonTwo = `{
        "id" : 1,
        "price" : 1000
    }`;
	socket.on('data', async function(data) {
        console.log(data);
        try{
            let price = await usecase.getList()
            console.log(price);
            clientArray.forEach(client=>{
                client.write(JSON.stringify(price));
            });
        }catch(e){
            console.log(e);
        }
	});
	socket.on('close', function () {
		console.log('client disconnted.');
	});
});

// print error message
server.on('error', function (err) {
    
	console.log('err: ', err);
});

// listening
server.listen(port, function () {
	console.log('listening on'+port);
});

const client = new net.Socket();

const HOST = "127.0.0.1";
client.connect(port,HOST, () => {
    client.setEncoding('utf8');
    client.write('Hello world!');
});
client.on('data',async function(data){
    console.log("On Data");
    console.log(data);
})