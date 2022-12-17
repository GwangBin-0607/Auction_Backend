const {product_prices} = require('../Database/models');
console.log(product_prices);
 async function allProductPriceList(){
  const result = product_prices.findOne({
  })
  return result
}
exports.getList = allProductPriceList;