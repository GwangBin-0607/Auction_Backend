const db = require('../Database/models');
const list = async () => {
  const result = await db.products.findAll({
    raw: true
  }).catch((err) => console.log(err));
  console.log(result);
  return result
}
module.exports.getproductlist = list;