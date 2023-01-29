//@ts-check
const { product_prices,product_updowns } = require('../Database/models');
const {findProductUpDown} = require('./product.updown.one.service');
/**
 * @typedef {Object} Product_Price_With_UpDown
 * @property {number} product_id
 * @property {number} product_price
 * @property {Boolean} state
 */
/**
 * 
 * @param {number} product_id 
 * @returns {Promise<Product_Price_With_UpDown>}
 * @throws {Error}
 */
async function findProductPriceOneWithUpDown(product_id){
    let returnProduct = await findProductPrice(product_id);
    let returnState = await findProductUpDown(product_id);
    return {
        product_id:product_id,
        product_price:returnProduct.product_price,
        state:returnState.state
    }
    
}
/**
 * @typedef {Object} streamProductPrice
 * @property {number} product_id
 * @property {number} product_price
 */
/**
 * 
 * @param {number} product_id 
 * @throws
 * @returns {Promise<streamProductPrice>}
 */
async function findProductPrice(product_id){
    let returnProduct = await product_prices.findOne({
        attributes:['product_id',['price','product_price']],
        where:{product_id:product_id},
        order:[['auction_date','DESC']]
    })
    /**@type {streamProductPrice} */
    let streamProductPrice = returnProduct.dataValues
    if (returnProduct == null){
        throw Error("No Match Product Price")
    }else{
        return streamProductPrice
    }
}
exports.findProductPriceOneWithUpDown = findProductPriceOneWithUpDown;