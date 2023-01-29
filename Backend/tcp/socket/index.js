//@ts-check
const socketHandler = require('./SocketStatus/socketStatusHandler');
const net = require('net');
const transfer = require('./Transfer/dataTransfer');
const {updateStreamProductPrice} = require('../services/product.price.update.service');
const {findProductPriceOneWithUpDown} = require('../services/product.priceWithUpDown.one.service');
const { SocketStatus } = require('./SocketStatus/socketStatus');

class Service{
    constructor(){
        this.transferObject = new transfer.class();
        this.socketsHandler = new socketHandler.handler();
    }
    /**
     * 
     * @param {net.Socket} socket 
     */
    connectSocket(socket){
        this.socketsHandler.registerSocket(socket)
    }
    /**
     * @param {net.Socket} socket 
     * @param {Buffer} data 
     */
     inputData(socket,data){
        let result = this.transferObject.dataToCompletion(data)
        result.forEach(async (dataForm)=>{
            switch(dataForm.dataType){
                case transfer.InputTypes.StreamStateUpdate:
                    /**@type {transfer.StreamStateUpdate} */
                    let streamStateData = dataForm.data
                    let resultBoolean = await this.socketsHandler.updateSocketStatus(socket,streamStateData.stateNumber);
                    this.socketWriteStreamStateUpdate(socket,resultBoolean,dataForm.completionId,dataForm.dataType);
                    break;
                case transfer.InputTypes.StreamProductPriceUpdate:
                    //Update Product Price And All Sockets Write Change
                    /** @type {transfer.StreamProductPrice} */
                    let streamProductPriceData = dataForm.data
                    let resultUpdateStreamProductPrice = await updateStreamProductPrice(streamProductPriceData)
                    this.socketWriteStreamStateUpdate(socket,resultUpdateStreamProductPrice.complete,dataForm.completionId,dataForm.dataType);
                    if(resultUpdateStreamProductPrice.complete){
                        await this.allSocketsWriteStreamProductPrice(this.socketsHandler.allSockets(),resultUpdateStreamProductPrice.product_id);
                    }
                    break;
                    
            }
        })
    }
    /**
     * @param {net.Socket} socket
     * @param {Boolean} data 
     * @param {number} complectionId
     * @param {transfer.InputTypes} dataType
     * @private
     */
    socketWriteStreamStateUpdate(socket,data,complectionId,dataType){
        let returnData = JSON.stringify({
            dataType:dataType,
            data:{result:data,completionId:complectionId}
        });
        console.log(returnData);
        socket.write(returnData+'/');
    }
    /**
     * 
     * @param {Array<SocketStatus>} socketStatus 
     * @param {number} product_id
     * @private
     */
    async allSocketsWriteStreamProductPrice(socketStatus,product_id){
        let streamProductPrice = await findProductPriceOneWithUpDown(product_id);
        let returnData = JSON.stringify({
            product_id:streamProductPrice.product_id,
            product_price:streamProductPrice.product_price,
            state:streamProductPrice.state
        });
        socketStatus.forEach(each=>{
            each.socket.write(returnData+'/')
        });
    }
}
exports.Service = Service;