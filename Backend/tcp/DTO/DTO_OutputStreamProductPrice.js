//@ts-check
const {DTO_OutputDataType} = require('./DTO_DataType')
class DTO_OutputStreamProductPrice{
    /**
     * 
     * @param {number} product_id 
     * @param {number} product_price 
     * @param {Boolean} state 
     * @param {String} auction_date 
     */
    constructor(product_id,product_price,state,auction_date){
        this.dataType = DTO_OutputDataType.StreamProductPrice
        this.data = {
            product_id:product_id,
            product_price:product_price,
            state:state,
            auction_date:auction_date

        }
    }
}
exports.DTO_OutputStreamProductPrice = DTO_OutputStreamProductPrice