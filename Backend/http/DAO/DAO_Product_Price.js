//@ts-check
class DAO_Product_Price{
    /**
     * 
     * @param {number} product_id 
     * @param {string} auction_date 
     * @param {number} price 
     */
    constructor(product_id,auction_date,price){
        this.product_id = product_id
        this.auction_date = auction_date
        this.price = price
    }
}
exports.DAO_Product_Price = DAO_Product_Price