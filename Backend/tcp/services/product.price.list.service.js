const {product_prices} = require('../Database/models');
 async function allProductPriceList(){
  const result = await product_prices.findAll({
    attributes:['product_id',['price','product_price']],
  })
  return result
}
exports.getList = allProductPriceList;