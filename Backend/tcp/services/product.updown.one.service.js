//@ts-check
const { product_updowns } = require('../Database/models');
/**
 * @typedef {Object} Product_UpDown_find_one
 * @property {number} product_id
 * @property {Boolean} state
 */
/**
 * 
 * @param {number} product_id 
 * @returns {Promise<Product_UpDown_find_one>}
 * @throws {Error}
 */
async function findProductUpDown(product_id){
    let returnProduct = await product_updowns.findOne({
        where:{product_id:product_id}
    })
    if (returnProduct == null){
        throw Error("No Match Product UpDown")
    }else{
        return returnProduct.dataValues
    }
}
exports.findProductUpDown = findProductUpDown;