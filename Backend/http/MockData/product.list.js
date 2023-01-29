//@ts-check
const {products} = require('../Database/models');

async function allProductList(){
  const result = await products.findAll({
  });
  return result
}
exports.getAllProductList = allProductList;