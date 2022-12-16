const {product_prices} = require('../database/models');
 async function allProductPriceList(){
  const result = product_prices.findAll({
  })
  return result
}
exports.getList = allProductPriceList;