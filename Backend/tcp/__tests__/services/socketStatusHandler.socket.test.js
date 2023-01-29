// jest.setTimeout(13000);
//@ts-check
const net = require('net');
const fakeSocketServer = require('./fakeSocketServer')
test('Done CallBack', done => {
    fakeSocketServer.openServer();
    const client = new net.Socket();
    const HOST = "127.0.0.1";
    client.connect(3200, HOST, () => {
        client.setEncoding('utf8');
        let mockData = JSON.stringify({
            completionId:1,
            dataType:1,
            data:{
                stateNumber:0
            }
        })
        let mockStreamData = JSON.stringify({
            completionId:1,
            dataType:2,
            data:{
                product_id:1,
                product_price:7000
            }
        });
        client.write(mockStreamData+'/');
    });
    client.on('data', async function (data) {
        console.log("On Data");
        console.log(data);
        if (data.toString() != 'Connect'){
            done();
            client.end();
            fakeSocketServer.closeServer();
        }

    });
})