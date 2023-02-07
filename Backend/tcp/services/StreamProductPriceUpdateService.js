//@ts-check
const {Product_UpDown_Repository} = require('../Repository//Product_UpDown');
const {Product_Price_Repository} = require('../Repository/Product_Price');
const {Product_Repository} = require('../Repository/Product');
const { DTO_RequestUpdateStreamProductPrice } = require('../DTO/DTO_RequestUpdateStreamProductPrice');
const { getToday } = require('../time');
const {DTO_ResponseUpdateStreamProductPrice} = require('../DTO/DTO_ResponseUpdateStreamProductPrice');
const {DAO_Product_Price} = require('../Repository/DAO/DAO_Product_Price')
const {DTO_OutputStreamProductPrice} = require('../DTO/DTO_OutputStreamProductPrice')

class StreamProductPriceUpdateService{
    constructor(){
        this.product_updown_dao = new Product_UpDown_Repository();
        this.product_price_dao = new Product_Price_Repository();
        this.product_dao = new Product_Repository();
    }
    /**
 * @param {DTO_RequestUpdateStreamProductPrice} streamProductPrice
 * @returns {Promise<Boolean>}
 * @private
 */
async productPriceUpdate(streamProductPrice) {
    try {
      let product = await this.product_price_dao.findProductPriceRecent(streamProductPrice.product_id);
      if (product != null&&this.updatable(product.price, streamProductPrice.product_price)) {
        let dto = new DAO_Product_Price(streamProductPrice.product_id,streamProductPrice.product_price,getToday());
        if (product?.auction_date == getToday()) {
          return await this.product_price_dao.updateProduct_Price(dto);
        } else {
          return await this.product_price_dao.insertProduct_Price(dto);
        }
      } else {
        return false
      }
    } catch(error) {
      return false
    }
  }
  /**
   * 
   * @param {DTO_RequestUpdateStreamProductPrice} streamProductPrice
   * @returns {Promise<Boolean>}
   * @private
   */
  async update(streamProductPrice) {
  
    let updateResult = await this.productPriceUpdate(streamProductPrice);
    if (updateResult) {
      await this.product_updown_dao.updateProductUpDownState(streamProductPrice.product_id,true);
      return true
    } else {
      return false
    }
  }
  /**
   * @param {DTO_RequestUpdateStreamProductPrice} streamProductPrice
   * @returns {Promise<DTO_ResponseUpdateStreamProductPrice>}
   */
  async updateProductPrice(streamProductPrice) {
    return new DTO_ResponseUpdateStreamProductPrice(streamProductPrice.product_id,await this.update(streamProductPrice));
  }
  /**
   * 
   * @param {number} product_id 
   * @returns {Promise<DTO_OutputStreamProductPrice|null>}
   */
  async findProductUpdownState(product_id){
    let product = await this.product_dao.productFindOne(product_id);
    let price = await this.product_price_dao.findProductPriceRecentBeforePrice(product_id);
    let state = await this.product_updown_dao.findProductUpDown(product_id);
    if(price != null && state != null){
      if (price.length == 1){
        let gap = price[0].price-product.product_price
        return new DTO_OutputStreamProductPrice(product_id,price[0].price,state.state,price[0].auction_date,gap);
      }else{
        let gap;
        if(price[0].auction_date == getToday()){
          console.log("1")
          gap = price[0].price - price[1].price
          console.log(gap)
        }else{
          console.log("2")
          gap = 0
        }
        return new DTO_OutputStreamProductPrice(product_id,price[0].price,state.state,price[0].auction_date,gap);
      }
    }else{
      return null
    }
  }
  
  /**
   * 
   * @param {number} beforePrice 
   * @param {number} afterPrice 
   * @private
   * @returns {Boolean}
   */
   updatable(beforePrice, afterPrice) {
    if (beforePrice >= afterPrice) {
      return false
    } else {
      return true
    }
  }
}
exports.StreamProductPriceUpdateService = StreamProductPriceUpdateService