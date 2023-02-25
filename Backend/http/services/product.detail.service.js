//@ts-check
const { products, product_images, product_prices, product_updowns, user_images, users } = require('../Database/models');
const dto = require('../DTO/DTO_Product_Detail');
const dao = require('../DAO');
class Product_Detail_Service {
    /**
     * 
     * @param {number} product_id 
     * @returns {Promise<dto.DTO_Product_Detail>}
     */
    async detailData(product_id) {
        let product = await this.returnProduct(product_id)
        // let beforePrice = this.checkBeforePrice(product.Product_Prices, product.product_price)
        let detailProduct = new dto.DTO_Product_Detail_Info(product.product_id);
        let detailUser = product.User;
        let detailComment = new dto.DTO_Comment(product.comment, product.registerTime, product.product_name,product.product_price);
        let detailImages = new dto.DTO_Detail_Product_Images(product.Product_Images);
        let detailGraph = new dto.DTO_Graph(product.Product_Prices);
        let returnDetailProduct = new dto.DTO_Product_Detail(detailProduct, detailImages, detailUser, detailComment, detailGraph);
        return returnDetailProduct;
    }
    /**
     * @typedef {Object} Product
     * @property {number} product_id
     * @property {string} product_name
     * @property {string} registerTime
     * @property {number} product_price
     * @property {string} comment
     * @property {number} user_id
     * @property {Array<dto.DTO_Detail_Image>} Product_Images
     * @property {dao.DAO_Product_UpDown} Product_UpDown
     * @property {Array<dao.DAO_Product_Price>} Product_Prices
     * @property {dto.DTO_User} User
     */
    /**
     * 
     * @param {number} product_id 
     * @returns {Promise<Product>}
     */
    async returnProduct(product_id) {
        return await products.findOne({
            include: [{
                model: product_images,
                attributes: ['image_id']
            }, {
                model: product_updowns,
                attributes: ['state']
            }, {
                model: product_prices,
                order: [['auction_date', 'DESC']],
                limit: 2,
                attributes: ['auction_date', 'price']
            }, {
                model: users,
                include: {
                    model: user_images,
                    attributes: ['image_id']
                }
            }],
            where: { product_id: product_id }
        })
    }
}
exports.Product_Detail_Service = Product_Detail_Service