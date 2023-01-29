//@ts-check
const { products } = require('../../Database/models');
const { Sequelize } = require('sequelize');
class Product_DAO {
    /**
     * 
     * @returns {Promise<number>}
     */
    async allProductCount() {
        return await products.count();
    }
    /**
     * 
     * @param {number} product_id 
     */
    async productFindOne(product_id) {
        let returnProduct = await products.findOne({
            where: { product_id: product_id }
        })
        return returnProduct
    }
}
exports.Product_DAO = Product_DAO;