//@ts-check
const net = require('net');
const { RouterTransfer } = require('./RouterTransfer');
const { SocketStatusService,test_Singleton } = require('../services/SocketStatusService');
const { DTO_OutputCompletionData } = require('../DTO/DTO_OutputCompletionData');
const { StreamProductPriceUpdateService } = require('../services/StreamProductPriceUpdateService');
const { DTO_InputDataType } = require('../DTO/DTO_DataType');
const { DTO_ResponseUpdateStreamProductPrice } = require('../DTO/DTO_ResponseUpdateStreamProductPrice');
const { DTO_OutputStreamProductPrice } = require('../DTO/DTO_OutputStreamProductPrice');
const { DTO_RequestUpdateSocketStatus } = require('../DTO/DTO_RequestUpdateSocketStatus');
const { DTO_RequestUpdateStreamProductPrice } = require('../DTO/DTO_RequestUpdateStreamProductPrice');
const { DTO_InputData } = require('../DTO/DTO_InputData');


class Controller {
    constructor() {
        this.routerTransfer = new RouterTransfer();
        this.socketStatusService = test_Singleton;
        this.streamProductPriceUpdateService = new StreamProductPriceUpdateService();
    }
    /**
     * 
     * @param {net.Socket} socket 
     */
    connect(socket) {
        this.socketStatusService.registerSocket(socket)
    }
    /**
     * 
     * @param {net.Socket} socket 
     */
    disconnect(socket) {
        this.socketStatusService.removeSocket(socket)
    }
    /**
     * @param {net.Socket} socket
     * @param {Buffer} data 
     */
    inputData(socket, data) {
        /** @type {Array<DTO_InputData>} */
        const inputData = this.routerTransfer.convertData(data);

        inputData.forEach(async eachInputData => {
            switch (eachInputData.dataType) {
                case DTO_InputDataType.SocketStatusUpdate:
                    /**@type {DTO_RequestUpdateSocketStatus} */
                    let socketStatusUpdate = eachInputData.data
                    /**@type {Boolean} */
                    let socketStatusUpdateResult = await this.socketStatusService.updateSocketStatus(socket, socketStatusUpdate);
                    this.writeSocket(socket, new DTO_OutputCompletionData(eachInputData.completionId, socketStatusUpdateResult));
                    break;
                case DTO_InputDataType.StreamProductPriceUpdate:
                    /**@type {DTO_RequestUpdateStreamProductPrice} */
                    let streamProductPriceUpdate = eachInputData.data
                    /**@type {DTO_ResponseUpdateStreamProductPrice} */
                    let streamProductPriceResult = await this.streamProductPriceUpdateService.updateProductPrice(streamProductPriceUpdate);
                    this.writeSocket(socket, new DTO_OutputCompletionData(eachInputData.completionId, streamProductPriceResult.complete));
                    if (streamProductPriceResult.complete) {
                        await this.allSocketsWriteStreamProductPrice(streamProductPriceResult.product_id);
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
        try {
            socket.write(JSON.stringify(data) + '/');
        } catch (error) {
            console.log("Write Error");
            console.log(error);
        }
    }
    /**
     * @param {number} product_id
     * @private
     */
    async allSocketsWriteStreamProductPrice(product_id) {
        /**@type {DTO_OutputStreamProductPrice|null} */
        let streamProductPrice = await this.streamProductPriceUpdateService.findProductUpdownState(product_id);
        let streamSockets = await this.socketStatusService.checkRangeProductWithSocketState(product_id)
        streamSockets.forEach(each => {
            this.writeSocket(each.socket,streamProductPrice);
        });
    }
}
exports.Controller = Controller