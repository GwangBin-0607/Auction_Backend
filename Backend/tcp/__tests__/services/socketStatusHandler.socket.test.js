// jest.setTimeout(13000);
//@ts-check
const net = require('net');
const {DTO_InputData} = require('../../DTO/DTO_InputData');
const fakeSocketServer = require('../../Fake/fakeSocketServer')
const {FakeSocketClient} = require('../../Fake/fakeSocketClient');
const { DTO_RequestUpdateStreamProductPrice } = require('../../DTO/DTO_RequestUpdateStreamProductPrice');
test('Done CallBack', done => {
    fakeSocketServer.openServer();
    var finishNumber = 4
    var startNumber = 0
    let completionHandler = function()  {
        startNumber += 1
        console.log(startNumber);
        if (finishNumber == startNumber){
            fakeSocketServer.closeServer();
            user_1.endClient();
            user_2.endClient();
            user_3.endClient();
            done();
        }
    }
    let user_1 = new FakeSocketClient();
    let user_2 = new FakeSocketClient();
    let user_3 = new FakeSocketClient();
    user_1.connectServer(completionHandler)
    user_2.connectServer(completionHandler)
    user_3.connectServer(completionHandler)
    let streamProductPrice = new DTO_RequestUpdateStreamProductPrice(1,100500);
    let mockInputData = new DTO_InputData(1,2,streamProductPrice)
    user_1.writeSocket(mockInputData);
})