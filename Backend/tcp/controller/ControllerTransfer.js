// @ts-check
const {DTO_InputData} = require('../DTO/DTO_InputData');
const {DTO_RequestUpdateSocketStatus} = require('../DTO/DTO_RequestUpdateSocketStatus');
const {DTO_RequestUpdateStreamProductPrice} = require('../DTO/DTO_RequestUpdateStreamProductPrice');
const {DTO_InputDataType} = require('../DTO/DTO_DataType');

class ControllerTransfer {

/**
 * @param {Buffer} data 
 * @returns {Array<DTO_InputData>}
 */
    dataToCompletion(data) {
        const splitData = data.toString().split('/')
        /**
         * @type {Array<DTO_InputData>}
         */
        let returnData = []
        for(let each of splitData){
            if (each != '') {
                /** @type {DTO_InputData} */
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
     * @param {DTO_InputData} data
     * @throws
     * @returns {DTO_InputData}
     * @private
     */
    mappingData(data) {
        let completionId = this.returncompletionId(data.completionId);
        let inputType = this.dataTypeCheck(data.inputType);
        switch (inputType) {
            case DTO_InputDataType.StreamProductPriceUpdate:
                /** @type {DTO_RequestUpdateStreamProductPrice} */
                let streamProductPrice = data.data
                let resultProductPrice = this.returnStreamProductPrice(streamProductPrice);
                return new DTO_InputData(completionId,inputType,resultProductPrice);
            case DTO_InputDataType.SocketStatusUpdate:
                /** @type {DTO_RequestUpdateSocketStatus} */
                let streamStateUpdate = data.data
                let resultStreamStateUpdate = this.returnStreamStateUpdate(streamStateUpdate);
                return new DTO_InputData(completionId,inputType,resultStreamStateUpdate);
        }
        throw Error("Not Data");
    }
    /**
     * @param {DTO_RequestUpdateStreamProductPrice} data
     * @throws
     * @returns {DTO_RequestUpdateStreamProductPrice}
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
     * @param {DTO_RequestUpdateSocketStatus} data 
     * @throws
     * @returns {DTO_RequestUpdateSocketStatus}
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
     * @param {DTO_InputDataType} type 
     * @returns {DTO_InputDataType}
     * @private
     * @throws
     */
    dataTypeCheck(type) {
        switch (type) {
            case DTO_InputDataType.SocketStatusUpdate:
                return DTO_InputDataType.SocketStatusUpdate;
            case DTO_InputDataType.StreamProductPriceUpdate:
                return DTO_InputDataType.StreamProductPriceUpdate;
            default:
                throw Error("Not Match InputType");
        }
    }
}
module.exports.ControllerTransfer = ControllerTransfer