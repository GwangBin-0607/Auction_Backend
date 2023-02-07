// @ts-check
const net = require('net');
require('dotenv').config();
const port = process.env.TCPPORT;
const {Controller} = require('./controller');
const serviceClass = new Controller();
const {SchedulerClient} = require('./_Mock_Client/controller/SchdulerClient')
const schedulerClient = new SchedulerClient();
function one(){
    console.log("One")
    throw Error("ONE");
}
function two(){
    console.log("Two")
    one();
}
try {
    two()
} catch (error) {
    
}
let server = net.createServer(async function (socket) {
    socket.setEncoding('utf8');
    console.log(`${socket.address} Connect!!!!!!`);
    serviceClass.connect(socket);
    socket.on('data', async function (data) {
        serviceClass.inputData(socket,data);
    });
    socket.on('close', function () {
        console.log(`${socket.address} Close!!`);
        serviceClass.disconnect(socket);
    });
});
// print error message
server.on('error', function (err) {
    console.log(err);
});
server.listen(port, function () {
    console.log("Listen")
});