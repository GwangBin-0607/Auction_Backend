// @ts-check

const handler = require('../../socket/SocketStatus/socketStatusHandler');
const net  = require('net')

test('Test Socket Handler', async () => {
    let firstSocket = new net.Socket()
    let newSocket = new net.Socket()
    let otherSocket = new net.Socket()
    let handlerObject = new handler.handler()
    handlerObject.registerSocket(firstSocket);
    handlerObject.registerSocket(newSocket);
    expect(async()=>{
        await handlerObject.updateSocketStatus(otherSocket,1);
    }).rejects.toThrowError(Error('Not Update Socket Status'))
});