//@ts-check
const {DTO_OutputDataType} = require('./DTO_DataType');
class DTO_OutputCompletionData{
    /**
     * 
     * @param {number} completionId 
     * @param {Boolean} result 
     */
    constructor(completionId,result){
        this.data = {
            completionId : completionId,
            result: result
        }
        this.dataType = DTO_OutputDataType.RequestResponse
    }
}
exports.DTO_OutputCompletionData = DTO_OutputCompletionData