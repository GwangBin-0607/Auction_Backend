//@ts-check
const { product_updowns } = require('../../Database/models');
/**
 * @typedef {Object} Product_UpDown
 * @property {number} product_id
 * @property {Boolean} state
 */
class Product_UpDown_DAO {
    /**
     * 
     * @param {number} product_id 
     * @returns {Promise<Product_UpDown>}
     * @throws {Error}
     */
    async findProductUpDown(product_id) {
        return await product_updowns.findOne({
            where: { product_id: product_id }
        })
    }
    /**
    * @param {number} product_id 
    * @param {Boolean} state
    * @returns {Promise<Array<number>>} [0] => No Update, [count] => Product updated as many as count
    */
    async updateProductUpDownState(product_id,state) {
        return await product_updowns.update({
            state: state
        }, {
            where: [{ product_id: product_id }]
        })
    }
}
exports.Product_UpDown_DAO = Product_UpDown_DAO