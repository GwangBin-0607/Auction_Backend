const net = require('net');
require('dotenv').config();
const port = process.env.TCPPORT;
let clientArray=[];

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
    // socket.write("hello");
	socket.on('data', function(data) {
        console.log("Connect Data!!!!!Second!!")
		console.log(data);
        try{
            const json = JSON.parse(data);
            const id = json.id;
            console.log(json);
        }catch(error){
            console.log(error);
        }
        clientArray.forEach(client=>{
            client.write(JSON.stringify(json));
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