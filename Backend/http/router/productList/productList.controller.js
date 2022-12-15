const usecase = require('../../usecase');

exports.allProductList = async (req, res, next) => {
    var result = await usecase.requestProductList();
    res.json(result);
}