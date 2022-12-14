const path = require('path');
const appRoot = process.env.PWD;
const come = path.resolve(appRoot, 'usecase');
const usecase = require(come);
module.exports.users = async (req, res, next) => {
    var result = await usecase.getproductlist();
    console.log(result);
    res.json(result);
}
// exports.users = usecase;