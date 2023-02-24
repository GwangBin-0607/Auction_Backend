//@ts-check
class DAO_Product{
    /**
     * 
     * @param {number} product_id 
     * @param {string} product_name 
     * @param {number} product_price 
     * @param {string} registerTime 
     * @param {string} comment 
     * @param {number} user_id 
     */
    constructor(product_id,product_name,product_price,registerTime,comment,user_id){
        this.product_id = product_id
        this.product_name = product_name
        this.product_price = product_price
        this.registerTime = registerTime
        this.comment = comment
        this.user_id = user_id
    }
}
exports.DAO_Product = DAO_Product