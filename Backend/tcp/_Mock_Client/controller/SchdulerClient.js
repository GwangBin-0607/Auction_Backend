//@ts-check
const { DTO_InputData } = require('../../DTO/DTO_InputData');
const net = require('net');
const {UpdateStreamProductPriceService} = require('../service/index')
const {test_Singleton} = require('../../services/SocketStatusService')

class SchedulerClient{
    constructor(){
        this.client = new net.Socket();
        this.Host = "127.0.0.1"
        this.connectServer();
        this.updateStreamProductPriceService = new UpdateStreamProductPriceService();
    }
    /**
     * @private
     */
    connectServer(){
        this.client.connect(3200, this.Host, async () => {
            this.client.setEncoding('utf8');
            console.log("Connect!!!!!!````");
            this.setScheduler();
        });
        this.client.on('data', async function (data) { 
            console.log(data);
        });
    }
    setScheduler(){
        setInterval(()=>{
            if (test_Singleton.test_isEnableStreaming()){
                this.update();
            }else{
                
            }
        },5000)
    }
    /**
     * @param {DTO_InputData} data 
     * @private
     */
    writeSocket(data){
        let mockData = JSON.stringify(data);
        this.client.write(mockData+'/');
    }
    /**
     * @private
     */
    endClient(){
        this.client.end();
    }
    /**
     * @private
     */
    async update(){
        let update = await this.updateStreamProductPriceService.updateService();
        for(let inputData of update){
            this.writeSocket(inputData);
        }
    }
}
exports.SchedulerClient = SchedulerClient