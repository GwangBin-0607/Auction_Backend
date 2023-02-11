// @ts-check
const net = require('net');
require('dotenv').config();
const port = process.env.TCPPORT;
const {Controller} = require('./controller');
const serviceClass = new Controller();
const {SchedulerClient} = require('./_Mock_Client/controller/SchdulerClient')
const schedulerClient = new SchedulerClient();
let server = net.createServer(async function (socket) {
    socket.setEncoding('utf8');
    serviceClass.connect(socket);
    socket.on('data', async function (data) {
        serviceClass.inputData(socket,data);
    });
    socket.on('close', function () {
        serviceClass.disconnect(socket);
    });
    socket.on('error',function(err){
        try {
            console.log("=======")
            console.log(err);
        } catch (error) {
            console.log(error);
        }
    })
});
// print error message
server.on('error', function (err) {
    try {
        console.log("=======")
        console.log(err);
    } catch (error) {
        console.log(error);
    }
});
server.listen(port, function () {
    console.log("Listen")
    schedulerClient.connectServer();
});