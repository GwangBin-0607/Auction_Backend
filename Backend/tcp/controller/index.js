//@ts-check
const net = require('net');
const { ControllerTransfer } = require('./ControllerTransfer');
const { SocketStatusService } = require('../services/SocketStatusService');
const { DTO_OutputCompletionData } = require('../DTO/DTO_OutputCompletionData');
const { StreamProductPriceUpdateService } = require('../services/StreamProductPriceUpdateService');
const { DTO_SocketStatus } = require('../DTO/DTO_SocketStatus')
const { DTO_InputDataType } = require('../DTO/DTO_DataType');
const { DTO_ResponseUpdateStreamProductPrice } = require('../DTO/DTO_ResponseUpdateStreamProductPrice');
const { DTO_OutputStreamProductPrice } = require('../DTO/DTO_OutputStreamProductPrice');
const { DTO_RequestUpdateSocketStatus } = require('../DTO/DTO_RequestUpdateSocketStatus');
const { DTO_RequestUpdateStreamProductPrice } = require('../DTO/DTO_RequestUpdateStreamProductPrice');


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
                case DTO_InputDataType.SocketStatusUpdate:
                    /**@type {DTO_RequestUpdateSocketStatus} */
                    let socketStatusUpdate = eachInputData.data
                    /**@type {Boolean} */
                    let socketStatusUpdateResult = await this.socketStatusService.updateSocketStatus(socket, socketStatusUpdate);
                    this.writeSocket(socket, new DTO_OutputCompletionData(eachInputData.completionId, socketStatusUpdateResult));
                    break;
                case DTO_InputDataType.StreamProductPriceUpdate:
                    /**@type {DTO_RequestStreamProductPrice} */
                    let streamProductPriceUpdate = eachInputData.data
                    /**@type {DTO_ResponseUpdateStreamProductPrice} */
                    let streamProductPriceResult = await this.streamProductPriceUpdateService.updateProductPrice(streamProductPriceUpdate);
                    this.writeSocket(socket, new DTO_OutputCompletionData(eachInputData.completionId, streamProductPriceResult.complete));
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
     * @param {Array<DTO_SocketStatus>} socketStatus 
     * @param {number} product_id
     * @private
     */
    async allSocketsWriteStreamProductPrice(socketStatus, product_id) {
        /**@type {DTO_OutputStreamProductPrice} */
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