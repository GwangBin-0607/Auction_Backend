//@ts-check
const { products, product_images, product_prices, product_updowns, user_images, users } = require('../Database/models');
const dto = require('../DTO/DTO_Product_Detail');
const dao = require('../DAO');
const { DTO_Product_Price_BeforePrice } = require('../DTO/DTO_Product_Price_BeforePrice');
const timeCheck = require('../time')
class Current_ProductPrice_Service {
    /**
    * 
    * @param {number} product_id 
    * @returns {Promise<dto.DTO_CurrentProductPrice>}
    */
    async buyProduct(product_id) {
        let current = await this.returnCurrentProductPrice(product_id);
        let currentPrice;
        if (current.Product_Prices.length == 0){
            currentPrice = current.product_price
        }else{
            currentPrice = current.Product_Prices[0].price
        }
        return new dto.DTO_CurrentProductPrice(current.product_id,this.checkBeforePrice(current.Product_Prices,current.product_price),currentPrice,current.Product_UpDown)
    }
    /**
 * @typedef {Object} CurrentProductPrice
 * @property {number} product_id
 * @property {number} product_price
 * @property {dao.DAO_Product_UpDown} Product_UpDown
 * @property {Array<dao.DAO_Product_Price>} Product_Prices
 */
    /**
     * 
     * @param {number} product_id 
     * @returns {Promise<CurrentProductPrice>}
     */
    async returnCurrentProductPrice(product_id) {
        return await products.findOne({
            include: [{
                model: product_updowns,
                attributes: ['state']
            }, {
                model: product_prices,
                order: [['auction_date', 'DESC']],
                limit: 2,
                attributes: ['auction_date', 'price']
            }],
            attributes: ['product_id', 'product_price'],
            where: { product_id: product_id }
        })
    }
    /**
    * 
    * @param {Array<dao.DAO_Product_Price>} product_prices 
    * @param {number} originalPrice 
    * @returns {number}
    */
    checkBeforePrice(product_prices, originalPrice) {
        let gap = 0
        if (product_prices.length == 1) {
            gap = product_prices[0].price - originalPrice
        } else {
            if (product_prices[0].auction_date == timeCheck.getToday()) {
                gap = product_prices[0].price - product_prices[1].price
            }
        }
        return gap
    }
}
exports.Current_ProductPrice_Service = Current_ProductPrice_Service