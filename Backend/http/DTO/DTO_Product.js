//@ts-check
const {DTO_Product_Images} = require('./DTO_Product_Images');
const { DTO_Product_Price } = require('./DTO_Product_Price');
const { DTO_Product_UpDown } = require('./DTO_Product_UpDown');
class DTO_Product{
    /**
     * 
     * @param {number} product_id 
     * @param {String} product_name 
     * @param {number} product_price 
     * @param {Array<DTO_Product_Images>} Product_Images 
     * @param {DTO_Product_UpDown} Product_UpDown 
     * @param {DTO_Product_Price} Product_Price 
     */
    constructor(product_id,product_name,product_price,Product_Images,Product_UpDown,Product_Price){
      this.product_id = product_id
      this.product_name = product_name
      this.original_price = product_price
      this.Product_Images = Product_Images
      this.Product_UpDown = Product_UpDown
      this.Product_Price = Product_Price
    }
  }
module.exports.DTO_Product = DTO_Product;