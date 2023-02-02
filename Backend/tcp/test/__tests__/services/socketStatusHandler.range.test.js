//@ts-check
const net = require('net');
const { DTO_RequestUpdateSocketStatus } = require('../../../DTO/DTO_RequestUpdateSocketStatus');
const {SocketStatusService} = require('../../../services/SocketStatusService')
test('Product Price DAO', async () => {
    let handler = new SocketStatusService()
    let caseOne = new net.Socket();
    let caseTwo = new net.Socket();
    let caseThree = new net.Socket();
    handler.registerSocket(caseOne);
    handler.registerSocket(caseTwo);
    handler.registerSocket(caseThree);
    await handler.updateSocketStatus(caseOne,new DTO_RequestUpdateSocketStatus(0));
    await handler.updateSocketStatus(caseTwo,new DTO_RequestUpdateSocketStatus(1));
    await handler.updateSocketStatus(caseThree,new DTO_RequestUpdateSocketStatus(2));
    const updateProductId = 16
    console.log(handler.allSockets().map(each=>each.statusNumber))
    const writeSockets = await handler.checkRangeProductWithSocketState(updateProductId);
    const mappingSockets = writeSockets.map(socketStatus=>socketStatus.socket);
    console.log(writeSockets.map(socketStatus=>socketStatus.statusNumber))
    expect(mappingSockets.includes(caseOne)).toEqual(false);
    expect(mappingSockets.includes(caseTwo)).toEqual(true);
    expect(mappingSockets.includes(caseThree)).toEqual(true);
    });