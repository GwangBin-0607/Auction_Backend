// @ts-check
const net = require('net');
require('dotenv').config();
const port = process.env.TCPPORT;
const service = require('../../socket/index');
const serviceClass = new service.Service();
let server = net.createServer(async function (socket) {
    socket.write('Connect');
    socket.setEncoding('utf8');
    serviceClass.connectSocket(socket);
    socket.on('data', async function (data) {
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