// @ts-check
/**
* @typedef {Object} DataForm
* @property {number} completionId
* @property {InputTypes} dataType
* @property {any} data
*/
/**
 * @typedef {Object} StreamProductPrice
 * @property {number} product_id
 * @property {number} product_price
 */
/**
 * @typedef {Object} StreamStateUpdate
 * @property {number} stateNumber
 */
/**
 * @enum {number}
*/
const InputTypes = {
    /**@readonly */
    StreamStateUpdate: 1,
    /**@readonly */
    StreamProductPriceUpdate: 2
};
class DataTransfer {

/**
 * @param {Buffer} data 
 * @returns {Array<DataForm>}
 */
    dataToCompletion(data) {
        const splitData = data.toString().split('/')
        /**
         * @type {Array<DataForm>}
         */
        let returnData = []
        for(let each of splitData){
            if (each != '') {
                /** @type {DataForm} */
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
     * @param {DataForm} data
     * @throws
     * @returns {DataForm}
     */
    /**@private */
    mappingData(data) {
        let completionId = this.returncompletionId(data.completionId);
        let inputType = this.dataTypeCheck(data.dataType);
        /** @type {DataForm} */
        let returnData;
        switch (inputType) {
            case InputTypes.StreamProductPriceUpdate:
                /** @type {StreamProductPrice} */
                let streamProductPrice = data.data
                let resultProductPrice = this.returnStreamProductPrice(streamProductPrice);
                /** @type {DataForm} */
                returnData = {
                    data: resultProductPrice,
                    dataType: inputType,
                    completionId: completionId
                }
                return returnData;
            case InputTypes.StreamStateUpdate:
                /** @type {StreamStateUpdate} */
                let streamStateUpdate = data.data
                let resultStreamStateUpdate = this.returnStreamStateUpdate(streamStateUpdate);
                returnData = {
                    data: resultStreamStateUpdate,
                    dataType: inputType,
                    completionId: completionId
                }
                return returnData
        }
        throw Error("Not Data");
    }
    /**
     * @param {StreamProductPrice} data
     * @throws
     * @returns {StreamProductPrice}
     */
    /**@private */
    returnStreamProductPrice(data) {
        if (data.product_id != undefined && data.product_price != undefined) {
            return data;
        } else {
            throw Error('Not StreamProductPrice');
        }
    }
    /**
     * 
     * @param {StreamStateUpdate} data 
     * @throws
     * @returns {StreamStateUpdate}
     */
    /**@private */
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
     */
    /** @private */
    returncompletionId(completionId) {
        if (completionId == undefined) {
            throw Error("No Completion Id");
        } else {
            return completionId
        }
    }
    /**
     * @param {number} type 
     * @returns {InputTypes}
     * @throws
     */
    /**@private */
    dataTypeCheck(type) {
        switch (type) {
            case InputTypes.StreamStateUpdate:
                return InputTypes.StreamStateUpdate;
            case InputTypes.StreamProductPriceUpdate:
                return InputTypes.StreamProductPriceUpdate;
            default:
                throw Error("Not Match InputType");
        }
    }
}
module.exports.class = DataTransfer
module.exports.InputTypes = InputTypes