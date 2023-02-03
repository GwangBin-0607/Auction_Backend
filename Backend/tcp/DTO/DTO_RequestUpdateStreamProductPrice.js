//@ts-check
class DTO_RequestUpdateStreamProductPrice{
    /**
     * 
     * @param {number} product_id 
     * @param {number} product_price 
     */
    constructor(product_id,product_price){
        this.product_id = product_id
        this.product_price = product_price
    }
}
module.exports.DTO_RequestUpdateStreamProductPrice = DTO_RequestUpdateStreamProductPrice