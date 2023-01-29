//@ts-check
const {Product_UpDown_DAO} = require('../Dao/Product_UpDown')
const {Product_Price_DAO} = require('../Dao/Product_Price');
const { StreamProductPrice } = require('../Dto/StreamProductPrice');
const { getToday } = require('../time');
const {UpdateStreamProductPrice} = require('../Dto/UpdateStreamProductPrice');
const {Product_Price} = require('../Entity/Product_Price')
const {OutputStreamProductPrice} = require('../Dto/OutputStreamProductPrice')

class StreamProductPriceUpdateService{
    constructor(){
        this.product_updown_dao = new Product_UpDown_DAO();
        this.product_price_dao = new Product_Price_DAO();
    }
    /**
 * @param {StreamProductPrice} streamProductPrice
 * @returns {Promise<Boolean>}
 * @private
 */
async  productPriceUpdate(streamProductPrice) {
    try {
      let product = await this.product_price_dao.findProductPriceRecent(streamProductPrice.product_id);
      if (this.updatable(product.price, streamProductPrice.product_price)) {
        let dto = new Product_Price(streamProductPrice.product_id,streamProductPrice.product_price,getToday());
        if (product.auction_date == getToday()) {
          console.log("update!")
          return await this.product_price_dao.updateProduct_Price(dto);
        } else {
          console.log("insert")
          return await this.product_price_dao.insertProduct_Price(dto);
        }
      } else {
        console.log(false);
        return false
      }
    } catch(error) {
      console.log(error);
      console.log("catch!");
      return false
    }
  }
  /**
   * 
   * @param {StreamProductPrice} streamProductPrice
   * @returns {Promise<Boolean>}
   * @private
   */
  async  update(streamProductPrice) {
  
    let updateResult = await this.productPriceUpdate(streamProductPrice);
    if (updateResult) {
      await this.product_updown_dao.updateProductUpDownState(streamProductPrice.product_id,true);
      return true
    } else {
      return false
    }
  }
  /**
   * @param {StreamProductPrice} streamProductPrice
   * @returns {Promise<UpdateStreamProductPrice>}
   */
  async  updateProductPrice(streamProductPrice) {
    return new UpdateStreamProductPrice(streamProductPrice.product_id,await this.update(streamProductPrice));
  }
  /**
   * 
   * @param {number} product_id 
   * @returns {Promise<OutputStreamProductPrice>}
   */
  async findProductUpdownState(product_id){
    let price = await this.product_price_dao.findProductPriceRecent(product_id);
    let state = await this.product_updown_dao.findProductUpDown(product_id);
    return new OutputStreamProductPrice(product_id,price.price,state.state);
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