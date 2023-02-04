//@ts-check
const { products } = require('../../Database/models');
const { Sequelize } = require('sequelize');
const { DTO_Product } = require('../../Dto/DTO_Product');
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
     * @returns {Promise<Array<any>>}
     */
    async allProductId(){
        return await products.findAll({
            attributes:['product_id']
        })
    }
    /**
     * 
     * @param {number} product_id 
     * @returns {Promise<DTO_Product>}
     */
    async productFindOne(product_id) {
        let returnProduct = await products.findOne({
            where: { product_id: product_id }
        })
        return returnProduct
    }
}
exports.Product_DAO = Product_DAO;