//@ts-check
const { product_prices } = require('../../Database/models');
const {Product_Price} = require('../../Entity/Product_Price');

class Product_Price_DAO {
    /**
     * 
     * @returns {Promise<Product_Price>}
     */
    async allProductPriceList() {
        return await product_prices.findAll()
    }
    /**
     * 
     * @param {number} product_id 
     * @returns {Promise<Product_Price>}
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
    * @param {Product_Price} streamProductPrice
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
    * @param {Product_Price} streamProductPrice
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
module.exports.Product_Price_DAO = Product_Price_DAO