const usecase = require(global.usecasePath);
module.exports.all_products = async (req, res, next) => {
    var result = await usecase.allProductList();
    console.log(result);
    res.json(result);
}
// exports.users = usecase;