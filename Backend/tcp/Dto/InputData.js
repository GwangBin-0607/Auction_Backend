//@ts-check
const {InputDataType} = require('./DataType');
class InputData{
/**
 * 
 * @param {number} completionId 
 * @param {InputDataType} inputType 
 * @param {any} data 
 */
    constructor(completionId,inputType,data){
         this.completionId = completionId
         this.inputType = inputType
         this.data = data
    }
}
module.exports.InputData = InputData