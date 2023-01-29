//@ts-check
const { product_prices } = require('../../Database/models');
/**
 * @typedef {Object} Product_Price
 * @property {number} product_id
 * @property {number} price
 * @property {String} auction_date
 */
class Product_Price_DAO {

    async allProductPriceList() {
        return await product_prices.findAll()
    }
    /**
     * 
     * @param {number} product_id 
     * @returns {Promise<Product_Price|null>}
     */
    async findProductPriceRecent(product_id) {
        return await product_prices.findOne({
            where: { product_id: product_id },
            order: [['auction_date', 'DESC']]
        })
    }
    /**
    * 
    * @param {Product_Price} streamProductPrice
    * @throws
    * @returns {Promise<Product_Price>}
    */
    async insertProduct_Price(streamProductPrice) {
        return await product_prices.create({
            product_id: streamProductPrice.product_id,
            price: streamProductPrice.price,
            auction_date: streamProductPrice.auction_date
        })
    }
    /**
    * 
    * @param {Product_Price} streamProductPrice
    * @returns {Promise<Array<number>>} [0] => No Update, [count] => Product updated as many as count
    */
    async updateProduct_Price(streamProductPrice) {
        return await product_prices.update({
            price: streamProductPrice.price
        }, {
            where: [{ product_id: streamProductPrice.product_id, auction_date: streamProductPrice.auction_date }]
        })
    }
    /**
    * 
    * @param {number} product_id 
    * @returns {Promise<Product_Price|null>}
    */
    async findProductPrice(product_id) {
        return await product_prices.findOne({
            where: { product_id: product_id },
            order: [['auction_date', 'DESC']]
        })
    }

}
module.exports.Product_Price_DAO = Product_Price_DAO