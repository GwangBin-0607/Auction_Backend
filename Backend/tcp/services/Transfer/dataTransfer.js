//@ts-check

/**
 * @enum {String}
 */
const InputTypes = Object.freeze({
    StreamStateUpdate: "StreamStateUpdate",
    StreamProductPriceUpdate: "StreamProductPriceUpdate",
    InitStreamState: "InitStreamState"
});

/**
 * @interface 
 */
class Interface {
    /**
     * 
     * @param {InputTypes} dataType
     */
    constructor(dataType) {
        this.inputTypes = dataType
    }
}
/**
 * @implements {Interface}
 */

class Output {
    /**
     * 
     * @param {InputTypes} dataType 
     * @param {number} completionId 
     */
    constructor(dataType, completionId) {
        this.inputTypes = dataType;
        this.completionId = completionId;
    }
}
/**
 * 
 * @param {Buffer} data 
 */

function dataToCompletion(data) {
    const splitData = data.toString().split('/')
    splitData.forEach(data => {
        if (data != '') {
            /**
            * @typedef {Object} DataForm
            * @property {number} completionId
            * @property {String} dataType
            */
            /** @type {DataForm} */
            let parse = JSON.parse(data);
            dataTypeCheck(parse.dataType)
        }
    });
}
/**
 * @param {String} type 
 * @returns {InputTypes}
 */
function dataTypeCheck(type) {
    switch (type) {
        case InputTypes.StreamStateUpdate:
            return InputTypes.StreamStateUpdate;
        case InputTypes.StreamProductPriceUpdate:
            return InputTypes.StreamProductPriceUpdate;
        case InputTypes.InitStreamState:
            return InputTypes.InitStreamState;
        default:
            throw Error("Not Match InputType");
    }
}
module.exports.dataTypeCheck = dataTypeCheck
module.exports.InputTypes = InputTypes