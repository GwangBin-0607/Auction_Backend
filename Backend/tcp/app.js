// @ts-check
const net = require('net');
require('dotenv').config();
const port = process.env.TCPPORT;
const {Controller} = require('./Controller');
const serviceClass = new Controller();
let server = net.createServer(async function (socket) {
    socket.setEncoding('utf8');
    console.log("Connect!");
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
server.listen(port, function () {
});