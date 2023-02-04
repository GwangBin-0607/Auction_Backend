//@ts-check
const usecase = require('../services/product.list.service');
/**
 * @typedef {Object} Request
 * @property {number} index
 */
/**
 * @typedef {Object} BodyParser
 * @property {Request} body
 */
/**
 * 
 * @param {BodyParser} req 
 */
module.exports = async (req, res, next) => {
    try {
        var result = await usecase.beforePriceList(req.body.index,15);
        if (result.length == 0){
            console.log("201")
            res.status(201).end();
        }else{
            res.status(200).json(result);
        }
    } catch (e) {
        console.log(e);
        res.status(400).send({error:e.toString()});
    }
}