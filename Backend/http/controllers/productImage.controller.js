const usecase = require('../usecase/productImage.usecase');

module.exports = async (req, res, next) => {
    var result = await usecase.getImage(req.body.imageURL);
    res.send(result);
}