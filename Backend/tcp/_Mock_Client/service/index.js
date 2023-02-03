//@ts-check
const { DTO_InputData } = require("../../DTO/DTO_InputData");
const { DTO_RequestUpdateStreamProductPrice } = require("../../DTO/DTO_RequestUpdateStreamProductPrice");
const { Product_Price_DAO } = require('../../DAO/Product_Price');
const { DTO_Product_Price } = require("../../DTO/DTO_Product_Price");
const { RandomProduct } = require('./RandomProduct')
const { Product_DAO } = require("../../DAO/Product");
//@ts-check
class UpdateStreamProductPriceService {
    constructor() {
        this.completionId = 0;
        this.product_price_DAO = new Product_Price_DAO();
        this.randomNumber = new RandomProduct(5);
        this.product_DAO = new Product_DAO();
    }
    /**
     * @returns {Promise<Array<DTO_InputData>>}
     */
    async updateService() {
        let product_id_list = (await this.product_DAO.allProductId()).map(each => each.product_id);
        let product_all_count = await this.product_DAO.allProductCount();
        let randomProductId = this.randomNumber.randomProductIdList(product_id_list, product_all_count)
        /** @type {Array<DTO_InputData>} */
        let resultDTO_InputData = new Array()
        for(let productId of randomProductId){
            /**@type {DTO_Product_Price|null} */
            const product = await this.product_price_DAO.findProductPriceRecent(productId)
            if (product != null) {
                const updateProductPrice = product.price + 500
                /**@type {DTO_RequestUpdateStreamProductPrice} */
                const dto_updateProductPrice = new DTO_RequestUpdateStreamProductPrice(product.product_id, updateProductPrice);
                resultDTO_InputData.push(new DTO_InputData(this.completionId, 2, dto_updateProductPrice));
            } 
        }
        return resultDTO_InputData
    }
}
exports.UpdateStreamProductPriceService = UpdateStreamProductPriceService;