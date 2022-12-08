const db = require('../../Database/models/index');
const usecase = require('../../usecase/productImageData.js');
const list = async () => {
  const result = await db.products.findAll({
    raw: true
  }).catch((err) => console.log(err));
  console.log(result);
  return result
}
// exports.users = async (req, res, next) => {
//     var result = await list()
//     res.json(result);
// }
exports.users = usecase;