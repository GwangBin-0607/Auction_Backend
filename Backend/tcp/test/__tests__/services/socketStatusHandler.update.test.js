//@ts-check
const net = require('net');
const { DTO_RequestUpdateSocketStatus } = require('../../../DTO/DTO_RequestUpdateSocketStatus');
const {SocketStatusService} = require('../../../services/SocketStatusService')
test('Product Price DAO', async () => {
    let handler = new SocketStatusService()
    let socket = new net.Socket();
    handler.registerSocket(socket);
    let request = new DTO_RequestUpdateSocketStatus(3);
    const testResult = await handler.updateSocketStatus(socket,request)
    expect(testResult).toEqual(true);
    });