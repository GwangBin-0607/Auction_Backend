//@ts-check
class DAO_Product_Price{
    /**
     * 
     * @param {number} product_id 
     * @param {number} price 
     * @param {String} auction_date 
     */
    constructor(product_id,price,auction_date){
        this.product_id = product_id
        this.price = price
        this.auction_date = auction_date
    }
}
exports.DAO_Product_Price = DAO_Product_Price