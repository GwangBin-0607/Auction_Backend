const {products} = require('../Database/models');
 async function allProductCount(){
  const result = await products.count();
  return result
}
exports.getList = allProductCount;