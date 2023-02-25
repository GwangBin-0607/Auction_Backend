//@ts-check
const {Current_ProductPrice_Service} = require('../services/product.currentProductPrice.service');
let service = new Current_ProductPrice_Service();
/**
 * @typedef {Object} Request
 * @property {number} product_id
 */
/**
 * @typedef {Object} BodyParser
 * @property {Request} body
 */
module.exports = async (req, res, next) => {
    try {
        console.log(req.body.product_id)
        var result = await service.buyProduct(req.body.product_id);
        res.status(200).json(result);
    } catch (e) {
        res.status(400).send({error:e.toString()});
    }
}