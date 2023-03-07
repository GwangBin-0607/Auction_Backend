//@ts-check
class DTO_RequestUpdateStreamProductPrice{
    /**
     * 
     * @param {number} product_id 
     * @param {number} product_price
     * @param {number} user_id 
     */
    constructor(product_id,product_price,user_id){
        this.product_id = product_id
        this.product_price = product_price
        this.user_id = user_id
    }
}
module.exports.DTO_RequestUpdateStreamProductPrice = DTO_RequestUpdateStreamProductPrice