//@ts-check
const { DTO_InputData } = require('../../DTO/DTO_InputData');
const net = require('net');
const {UpdateStreamProductPriceService} = require('../service')
const {test_Singleton} = require('../../services/SocketStatusService')

class SchedulerClient{
    constructor(){
        this.client = new net.Socket();
        this.Host = "127.0.0.1"
        this.updateStreamProductPriceService = new UpdateStreamProductPriceService();
    }
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
    /**
     * @private
     */
    setScheduler(){
        setInterval(()=>{
            if (test_Singleton.test_isEnableStreaming()){
                this.update();
            }else{
                
            }
        },500)
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