const usecase = require('../../usecase');

exports.product_image = async (req, res, next) => {
    var result = await usecase.requestProductImage(req.body.imageURL);
    res.send(result);
}