//@ts-check
/**
 * @enum {number}
*/
const DTO_OutputDataTypes = {
    /**@readonly */
    RequestResponse: 1,
    /**@readonly */
    StreamProductPrice: 2
};
/**
 * @enum {number}
*/
const DTO_InputDataType = {
    /**@readonly */
    SocketStatusUpdate: 1,
    /**@readonly */
    StreamProductPriceUpdate: 2
};
exports.DTO_InputDataType = DTO_InputDataType;
exports.DTO_OutputDataType = DTO_OutputDataTypes;