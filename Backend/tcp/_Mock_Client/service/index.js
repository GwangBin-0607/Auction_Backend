//@ts-check
const { DTO_InputData } = require("../../DTO/DTO_InputData");
const { DTO_RequestUpdateStreamProductPrice } = require("../../DTO/DTO_RequestUpdateStreamProductPrice");
const { Product_Price_Repository } = require('../../Repository/Product_Price');
const { DAO_Product_Price } = require("../../Repository/DAO/DAO_Product_Price");
const { RandomProduct } = require('./RandomProduct')
const { Product_Repository } = require("../../Repository/Product");
//@ts-check
class UpdateStreamProductPriceService {
    constructor() {
        this.completionId = 0;
        this.product_price_Repository = new Product_Price_Repository();
        this.randomNumber = new RandomProduct(5);
        this.product_Repository = new Product_Repository();
    }
    /**
     * @returns {Promise<Array<DTO_InputData>>}
     */
    async updateService() {
        let product_id_list = (await this.product_Repository.allProductId()).map(each => each.product_id);
        let product_all_count = await this.product_Repository.allProductCount();
        let randomProductId = this.randomNumber.randomProductIdList(product_id_list, product_all_count)
        /** @type {Array<DTO_InputData>} */
        let resultDTO_InputData = new Array()
        for(let productId of randomProductId){
            /**@type {DAO_Product_Price|null} */
            const product = await this.product_price_Repository.findProductPriceRecent(productId)
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