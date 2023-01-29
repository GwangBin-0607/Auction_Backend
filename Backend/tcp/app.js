// @ts-check
const net = require('net');
require('dotenv').config();
const port = process.env.TCPPORT;
// const service = require('./socket');
// const serviceClass = new service.Service();
let server = net.createServer(async function (socket) {
    socket.setEncoding('utf8');
    // serviceClass.connectSocket(socket);
    socket.on('data', async function (data) {
        console.log("====")
        console.log(data);
        // serviceClass.inputData(socket,data);
        let json = `{
            "dataType":2,
           "data" :{
            "product_id":1,
            "product_price":300
           } 
        }`
        class Test{
            constructor(number){
                this.number = number
            }
        }
        let a = new Test(1);

        socket.write(JSON.stringify(a)+'/');
    });
    socket.on('close', function () {
        // let removeIndex = clientArray.indexOf(socket);
        // clientArray.splice(removeIndex, 1)
        // console.log('disconnect')
        // console.log(clientArray.length);
    });
});
// // print error message
// server.on('error', function (err) {

//     console.log('err: ', err);
// });

// // listening
// server.listen(port, function () {
//     console.log('listening on' + port);
// });

// const client = new net.Socket();

// const HOST = "127.0.0.1";
// client.connect(3200, HOST, () => {
//     client.setEncoding('utf8');
//     client.write('Hello world!');
//     // client.end();
// });
// client.on('data',async function(data){
//     console.log("On Data");
//     console.log(data);

// });