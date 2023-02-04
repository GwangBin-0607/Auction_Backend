//@ts-check
class DTO_Product_Price_BeforePrice{
    /**
     * 
     * @param {String} auction_date 
     * @param {number} price 
     * @param {number} beforePrice
     */
    constructor(auction_date,price,beforePrice){
      this.auction_date = auction_date
      this.price = price
      this.beforePrice = beforePrice
    }
  }
  module.exports.DTO_Product_Price_BeforePrice = DTO_Product_Price_BeforePrice;