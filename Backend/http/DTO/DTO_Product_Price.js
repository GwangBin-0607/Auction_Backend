//@ts-check
class DTO_Product_Price{
    /**
     * 
     * @param {String} auction_date 
     * @param {number} price 
     */
    constructor(auction_date,price){
      this.auction_date = auction_date
      this.price = price
    }
  }
  module.exports.DTO_Product_Price = DTO_Product_Price;