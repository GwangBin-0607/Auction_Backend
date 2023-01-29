//@ts-check
const { Sequelize } = require('sequelize');
const { products } = require('../Database/models');
/**
 * 
 * @param {number} product_id 
 */
async function productFindOne(product_id) {
    let returnProduct = await products.findOne({
        where:{product_id:product_id}
    })
    return returnProduct
}
exports.getList = productFindOne;