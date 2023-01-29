// @ts-check
const {InputData} = require('../Dto/InputData');
const {SocketStatusUpdate} = require('../Dto/SocketStatusUpdate');
const {StreamProductPrice} = require('../Dto/StreamProductPrice');
const {InputDataType} = require('../Dto/DataType');

class ControllerTransfer {

/**
 * @param {Buffer} data 
 * @returns {Array<InputData>}
 */
    dataToCompletion(data) {
        const splitData = data.toString().split('/')
        /**
         * @type {Array<InputData>}
         */
        let returnData = []
        for(let each of splitData){
            if (each != '') {
                /** @type {InputData} */
                let parse = JSON.parse(each);
                try {
                    returnData.push(this.mappingData(parse))
                } catch (error) {
                    console.log(error);
                }
            }
        }
        return returnData;
    }
    /**
     * @param {InputData} data
     * @throws
     * @returns {InputData}
     * @private
     */
    mappingData(data) {
        let completionId = this.returncompletionId(data.completionId);
        let inputType = this.dataTypeCheck(data.inputType);
        switch (inputType) {
            case InputDataType.StreamProductPriceUpdate:
                /** @type {StreamProductPrice} */
                let streamProductPrice = data.data
                let resultProductPrice = this.returnStreamProductPrice(streamProductPrice);
                return new InputData(completionId,inputType,resultProductPrice);
            case InputDataType.SocketStatusUpdate:
                /** @type {SocketStatusUpdate} */
                let streamStateUpdate = data.data
                let resultStreamStateUpdate = this.returnStreamStateUpdate(streamStateUpdate);
                return new InputData(completionId,inputType,resultStreamStateUpdate);
        }
        throw Error("Not Data");
    }
    /**
     * @param {StreamProductPrice} data
     * @throws
     * @returns {StreamProductPrice}
     * @private
     */
    returnStreamProductPrice(data) {
        if (data.product_id != undefined && data.product_price != undefined) {
            return data;
        } else {
            throw Error('Not StreamProductPrice');
        }
    }
    /**
     * 
     * @param {SocketStatusUpdate} data 
     * @throws
     * @returns {SocketStatusUpdate}
     * @private
     */
    returnStreamStateUpdate(data) {
        if (data.stateNumber != undefined) {
            return data;
        } else {
            throw Error('Not StreamStateUpdate');
        }
    }
    /**
     * @param {number} completionId
     * @throws
     * @returns {number}
     * @private
     */
    returncompletionId(completionId) {
        if (completionId == undefined) {
            throw Error("No Completion Id");
        } else {
            return completionId
        }
    }
    /**
     * @param {InputDataType} type 
     * @returns {InputDataType}
     * @private
     * @throws
     */
    dataTypeCheck(type) {
        switch (type) {
            case InputDataType.SocketStatusUpdate:
                return InputDataType.SocketStatusUpdate;
            case InputDataType.StreamProductPriceUpdate:
                return InputDataType.StreamProductPriceUpdate;
            default:
                throw Error("Not Match InputType");
        }
    }
}
module.exports.ControllerTransfer = ControllerTransfer