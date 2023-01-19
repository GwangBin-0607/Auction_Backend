// @ts-check
const net = require('net');
require('dotenv').config();
const port = process.env.TCPPORT;
let clientArray = [];
const socketStatus = require('./services/SocketStatus/socketStatus')
socketStatus.SocketStatus
let server = net.createServer(async function (socket) {
    socket.setEncoding('utf8');
    clientArray.push(socket);
    socket.on('data', async function (data) {

        //         socket.write(json+'/');
        //     }
        // });
    });
    socket.on('close', function () {
        let removeIndex = clientArray.indexOf(socket);
        clientArray.splice(removeIndex, 1)
        console.log('disconnect')
        console.log(clientArray.length);
    });
});
// print error message
server.on('error', function (err) {

    console.log('err: ', err);
});

// listening
server.listen(port, function () {
    console.log('listening on' + port);
});

// const fs = require('fs').promises;

// async function returnImage(imageURL){
//     var file = await fs.readFile(imageURL)
//     return file
// }

// const client = new net.Socket();

// const HOST = "127.0.0.1";
// client.connect(port, HOST, () => {
//     client.setEncoding('utf8');
//     client.write('Hello world!');
//     // client.end();
// });
// client.on('data',async function(data){
//     console.log("On Data");
//     console.log(data);

// });