const usecase = require('../services/product.list.service');

module.exports = async (req, res, next) => {
    try {
        var result = await usecase.getList();
        res.status(200).json(result);
    } catch (e) {
        console.log(e);
        res.status(400).send({error:e.toString()});
    }
}