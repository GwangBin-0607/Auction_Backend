//@ts-check
const net = require('net');
const { DTO_InputData } = require('../DTO/DTO_InputData');
class FakeSocketClient{
    constructor(){
        this.client = new net.Socket();
        this.Host = "127.0.0.1"
    }
    /**
     * 
     * @param {()=>Void} completion 
     */
    connectServer(completion){
        this.client.connect(3200, this.Host, () => {
            this.client.setEncoding('utf8');
        });
        this.client.on('data', async function (data) { 
            console.log(data);
            completion()
        });
    }
    /**
     * 
     * @param {DTO_InputData} data 
     */
    writeSocket(data){
        let mockData = JSON.stringify(data);
        this.client.write(mockData+'/');
    }
    endClient(){
        this.client.end();
    }
}
exports.FakeSocketClient = FakeSocketClient;