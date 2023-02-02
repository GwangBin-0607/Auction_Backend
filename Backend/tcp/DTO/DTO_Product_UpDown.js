//@ts-check
class DTO_Product_UpDown{
    /**
     * 
     * @param {number} product_id 
     * @param {Boolean} state 
     */
    constructor(product_id,state){
        this.product_id = product_id
        this.state = state
    }
}
exports.DTO_Product_UpDown = DTO_Product_UpDown