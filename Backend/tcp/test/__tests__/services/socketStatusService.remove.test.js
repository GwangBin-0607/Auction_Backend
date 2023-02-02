//@ts-check
const net = require('net')
const {SocketStatusService} = require('../../../services/SocketStatusService')
test('Product Price DAO', async () => {
    let handler = new SocketStatusService()
    let client_1 = new net.Socket()
    let client_2 = new net.Socket()
    handler.registerSocket(client_1);
    handler.registerSocket(client_2);
    console.log(handler.allSockets().length);
    handler.removeSocket(client_1);
    expect(handler.allSockets().length).toEqual(1);
    });