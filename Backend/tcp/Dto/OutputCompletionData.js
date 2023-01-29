//@ts-check
const {OutputDataType} = require('./DataType');
class OutputCompletionData{
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
        this.dataType = OutputDataType.RequestResponse
    }
}
exports.OutputCompletionData = OutputCompletionData