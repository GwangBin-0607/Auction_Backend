// @ts-check
const net = require('net');
require('dotenv').config();
const port = process.env.TCPPORT;
let clientArray = [];
let usecase = require('./services/product.price.list.service')
let alterUsecase = require('./services/product.price.alter.service')
let server = net.createServer(async function (socket) {
    await alterUsecase.getList()
    console.log(socket.address() + " connected.");
    socket.setEncoding('utf8');
    clientArray.push(socket);
    let jsonTwo = `{
        "dataType":"InputStreamProductPrice",
        "data":[{"product_id":1,"product_price":1100}]
    }`
    setInterval(() => {
        console.log("Write!!")
        socket.write(jsonTwo+'/');
    },13000);
    socket.on('data', async function (data) {
        /**
         * @typedef {Object} StreamProductPrice
         * @property {number} product_id
         * @property {number} product_price        
        */

        /**
         * @typedef {Object} StreamProductState
         * @property {Array<number>} product_id
         */

        /**
        * @typedef {Object} DataForm
        * @property {number} completionId
        * @property {StreamProductPrice | StreamProductState} data
        * @property {String} dataType
        */
        let testString = data.toString().split('/')
        testString.forEach(data => {
            if (data != '') {
                /** @type {DataForm} */
                console.log(data);
                let parse = JSON.parse(data);
                console.log(parse.completionId)
                let json = `{
                    "dataType":"OutputStreamReaded",
                    "data":{"result":{"result":true},"completionId":${parse.completionId}}
                }`
                let jsonTwo = `{
                    "dataType":"InputStreamProductPrice",
                    "data":[{"product_id":1,"product_price":1100}]
                }`

                // socket.write(json+'/');
                setTimeout(() => {
                    console.log("Write!!")
                    socket.write(jsonTwo+'/');
                }, 3000);
                
            }
        });
        // try{
        //     let parse = JSON.parse(data.toString());
        //     console.log(parse);
        //     let json = `{
        //         "dataType":"OutputStreamReaded",
        //         "data":{"result":true,"completionId":${parse.completionId}}
        //     }`
        //     clientArray.forEach(client => {
        //         client.write(json);
        //     });
        // }catch(e){
        //     console.log(e);
        // }
    });
    socket.on('close', function () {
        let removeIndex = clientArray.indexOf(socket);
        clientArray.splice(removeIndex, 1)
        console.log('disconnect')
        console.log(clientArray);
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