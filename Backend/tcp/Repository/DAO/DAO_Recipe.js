//@ts-check
class Recipe{
    /**
     * 
     * @param {number} product_id 
     * @param {number} product_price 
     * @param {number} user_id 
     */
    constructor(product_id,product_price,user_id){
        this.product_id = product_id
        this.price = product_price
        this.user_id = user_id
    }
}
exports.Recipe = Recipe