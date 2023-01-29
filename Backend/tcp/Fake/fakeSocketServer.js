// @ts-check
const net = require('net');
require('dotenv').config();
const port = process.env.TCPPORT;
const {Controller} = require('../Controller');
const serviceClass = new Controller();
let server = net.createServer(async function (socket) {
    socket.setEncoding('utf8');
    serviceClass.connect(socket);
    socket.on('data', async function (data) {
        console.log(data);
        serviceClass.inputData(socket,data);
    });
    socket.on('close', function () {
        socket.end();
    });
});
// print error message
server.on('error', function (err) {
});

// listening
function openServer(){
    server.listen(port, function () {
    });
}
function closeServer(){
    server.close();
}
exports.openServer = openServer
exports.closeServer = closeServer