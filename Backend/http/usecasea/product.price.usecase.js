const {product_prices} = require('../Database/models');
 async function allProductPriceList(){
  const result = product_prices.findOne({
  })
  return result
}
exports.getList = allProductPriceList;