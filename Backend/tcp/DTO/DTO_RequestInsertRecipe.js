//@ts-check
class DTO_RequestInsertRecipe{
    /**
     * 
     * @param {number} user_id 
     * @param {number} product_id 
     * @param {number} product_price 
     */
    constructor(user_id,product_id,product_price){
        this.user_id = user_id
        this.product_id = product_id
        this.product_price = product_price
    }
}
module.exports.DTO_RequestInsertRecipe = DTO_RequestInsertRecipe