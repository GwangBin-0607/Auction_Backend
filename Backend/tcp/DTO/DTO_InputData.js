//@ts-check
const {DTO_InputDataType} = require('./DTO_DataType');
class DTO_InputData{
/**
 * 
 * @param {number} completionId 
 * @param {DTO_InputDataType} inputType 
 * @param {any} data RequestUpdateStreamProductPrice OR RequestUpdateSocketStatus
 */
    constructor(completionId,inputType,data){
         this.completionId = completionId
         this.dataType = inputType
         this.data = data
    }
}
module.exports.DTO_InputData = DTO_InputData