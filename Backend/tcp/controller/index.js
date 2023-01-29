//@ts-check
const net = require('net');
const { ControllerTransfer } = require('./ControllerTransfer');
const { SocketStatusService } = require('../services/SocketStatusService');
const { OutputCompletionData } = require('../Dto/OutputCompletionData');
const { StreamProductPriceUpdateService } = require('../services/StreamProductPriceUpdateService');
const { SocketStatus } = require('../Dto/SocketStatus')
const {InputDataType} = require('../Dto/DataType');
const { UpdateStreamProductPrice } = require('../Dto/UpdateStreamProductPrice');
const { OutputStreamProductPrice } = require('../Dto/OutputStreamProductPrice');

 
class Controller {
    constructor() {
        this.controllerTransfer = new ControllerTransfer();
        this.socketStatusService = new SocketStatusService();
        this.streamProductPriceUpdateService = new StreamProductPriceUpdateService();
    }
    connect(socket) {
        this.socketStatusService.registerSocket(socket)
    }
    /**
     * @param {net.Socket} socket
     * @param {Buffer} data 
     */
    inputData(socket, data) {
        let inputData = this.controllerTransfer.dataToCompletion(data);

        inputData.forEach(async eachInputData => {
            switch (eachInputData.inputType) {
                case InputDataType.SocketStatusUpdate:
                    /**@type {Boolean} */
                    let socketStatusUpdateResult = await this.socketStatusService.updateSocketStatus(socket, eachInputData.data);
                    this.writeSocket(socket, new OutputCompletionData(eachInputData.completionId, socketStatusUpdateResult));
                    break;
                case InputDataType.StreamProductPriceUpdate:
                    /**@type {UpdateStreamProductPrice} */
                    let streamProductPriceResult = await this.streamProductPriceUpdateService.updateProductPrice(eachInputData.data);
                    this.writeSocket(socket, new OutputCompletionData(eachInputData.completionId, streamProductPriceResult.complete));
                    if (streamProductPriceResult.complete) {
                        let allSockets = this.socketStatusService.allSockets();
                        await this.allSocketsWriteStreamProductPrice(allSockets, streamProductPriceResult.product_id);
                    }
                    break;
            }
        });
    }
    /**
     * 
     * @param {net.Socket} socket 
     * @param {Object} data 
     * @private
     */
    writeSocket(socket, data) {
        socket.write(JSON.stringify(data) + '/');
    }
    /**
     * 
     * @param {Array<SocketStatus>} socketStatus 
     * @param {number} product_id
     * @private
     */
    async allSocketsWriteStreamProductPrice(socketStatus, product_id) {
        /**@type {OutputStreamProductPrice} */
        let streamProductPrice = await this.streamProductPriceUpdateService.findProductUpdownState(product_id);
        let returnData = JSON.stringify({
            product_id: streamProductPrice.product_id,
            product_price: streamProductPrice.product_price,
            state: streamProductPrice.state
        });
        socketStatus.forEach(each => {
            each.socket.write(returnData + '/')
        });
    }
}
exports.Controller = Controller