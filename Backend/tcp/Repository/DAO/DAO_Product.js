//@ts-check
class DAO_Product{
    /**
     * 
     * @param {number} product_id 
     * @param {String} product_name 
     * @param {number} product_price 
     */
    constructor(product_id,product_name,product_price){
        this.product_id = product_id
        this.product_name = product_name
        this.product_price = product_price
    }
}
exports.DAO_Product = DAO_Product