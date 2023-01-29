//@ts-check
/**
 * @enum {number}
*/
const OutputDataTypes = {
    /**@readonly */
    RequestResponse: 1,
    /**@readonly */
    StreamProductPrice: 2
};
/**
 * @enum {number}
*/
const InputDataType = {
    /**@readonly */
    SocketStatusUpdate: 1,
    /**@readonly */
    StreamProductPriceUpdate: 2
};
exports.InputDataType = InputDataType;
exports.OutputDataType = OutputDataTypes;