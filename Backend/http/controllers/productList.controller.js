const usecase = require('../usecase/productList.usecase');

module.exports = async (req, res, next) => {
    var result = await usecase.getList();
    res.status(200).json(result);
}