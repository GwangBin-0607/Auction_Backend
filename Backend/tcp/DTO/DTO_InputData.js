//@ts-check
const {DTO_InputDataType} = require('./DTO_DataType');
class DTO_InputData{
/**
 * 
 * @param {number} completionId 
 * @param {DTO_InputDataType} inputType 
 * @param {any} data 
 */
    constructor(completionId,inputType,data){
         this.completionId = completionId
         this.inputType = inputType
         this.data = data
    }
}
module.exports.DTO_InputData = DTO_InputData