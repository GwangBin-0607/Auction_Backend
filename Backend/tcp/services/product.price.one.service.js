//@ts-check
const { product_prices } = require('../Database/models');
/**
 * @typedef {Object} Product_Price_find_one
 * @property {number} product_id
 * @property {number} price
 * @property {String} auction_date
 */
/**
 * 
 * @param {number} product_id 
 * @returns {Promise<Product_Price_find_one>}
 * @throws {Error}
 */
async function findProductPriceBeforeToday(product_id){
    let returnProduct = await product_prices.findOne({
        where:{product_id:product_id},
        order:[['auction_date','DESC']]
    })
    if (returnProduct == null){
        throw Error("No Match Product Price")
    }else{
        return returnProduct.dataValues
    }
}
exports.findProductPriceBeforeToday = findProductPriceBeforeToday;