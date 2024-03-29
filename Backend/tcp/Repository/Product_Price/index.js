//@ts-check
const { product_prices } = require('../../Database/models');
const {DAO_Product_Price} = require('../DAO/DAO_Product_Price');

class Product_Price_Repository {
    /**
     * 
     * @returns {Promise<Array<DAO_Product_Price>>}
     */
    async allProductPriceList() {
        return await product_prices.findAll()
    }
    /**
     * 
     * @param {number} product_id 
     * @returns {Promise<DAO_Product_Price|null>}
     * @throws
     */
    async findProductPriceRecent(product_id) {
        return await product_prices.findOne({
            where: { product_id: product_id },
            order: [['auction_date', 'DESC']]
        });
    }
        /**
     * 
     * @param {number} product_id 
     * @returns {Promise<Array<DAO_Product_Price>>}
     * @throws
     */
        async findProductPriceRecentBeforePrice(product_id) {
          return await product_prices.findAll({
              where: { product_id: product_id },
              order: [['auction_date', 'DESC']],
              limit:2
          });
      }
    /**
    * 
    * @param {DAO_Product_Price} streamProductPrice
    * @throws
    * @returns {Promise<Boolean>}
    */
    async insertProduct_Price(streamProductPrice) {
        try {
            await product_prices.create({
              product_id: streamProductPrice.product_id,
              price: streamProductPrice.price,
              auction_date: streamProductPrice.auction_date
            })
            return true
          } catch {
            return false
          }
    }
    /**
    * 
    * @param {DAO_Product_Price} streamProductPrice
    * @returns {Promise<Boolean>} [0] => No Update, [count] => Product updated as many as count
    */
    async updateProduct_Price(streamProductPrice) {
        let resultArray = await product_prices.update({
            price: streamProductPrice.price
          }, {
            where: [{ product_id: streamProductPrice.product_id, auction_date: streamProductPrice.auction_date }]
          })
          if (resultArray[0] == 0) {
            return false
          } else {
            return true
          }
    }

}
module.exports.Product_Price_Repository = Product_Price_Repository