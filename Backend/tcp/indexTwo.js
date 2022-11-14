const net = require('net');
require('dotenv').config();
const port = process.env.TCPPORT;
let clientArray=[];

let server = net.createServer(function (socket) {
	console.log(socket.address() + " connected.");
	socket.setEncoding('utf8');
    clientArray.push(socket)
    const json = {
        id : 100,
        name :"안광빈"
    }
    let jsonTwo = `{
        "id" : "byeolgori502",
        "name" : "별고리"
    }`;
    // socket.write("hello");
	socket.on('data', function (data) {
        console.log("Connect Data!!")
		console.log(data);
        clientArray.forEach(client=>{
            client.write("hello");
        });
	});
	socket.on('close', function () {
		console.log('client disconnted.');
	});
	setTimeout(() => {
		socket.write('welcome to server!!!!123!!!!');
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