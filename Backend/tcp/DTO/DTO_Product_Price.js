//@ts-check
class DTO_Product_Price{
    constructor(product_id,price,auction_date){
        this.product_id = product_id
        this.price = price
        this.auction_date = auction_date
    }
}
exports.DTO_Product_Price = DTO_Product_Price