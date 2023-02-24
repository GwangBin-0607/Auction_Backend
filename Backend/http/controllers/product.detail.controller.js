//@ts-check
const {Product_Detail_Service} = require('../services/product.detail.service');
let service = new Product_Detail_Service();
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
        var result = await service.detailData(req.body.product_id);
        console.log(result)
        res.status(200).json(result);
    } catch (e) {
        console.log(e);
        res.status(400).send({error:e.toString()});
    }
}