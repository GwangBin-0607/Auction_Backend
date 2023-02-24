//@ts-check
class DAO_Product_UpDown{
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
exports.DAO_Product_UpDown = DAO_Product_UpDown