//@ts-check
const { Sequelize } = require('sequelize');
const { product_prices } = require('../Database/models');
const randomNumber = require('./scheduler/randomNumber/randomNumber')

async function productPriceUpdate() {
  /** @type  {Array.<{dataValues:randomNumber.Product_Price}>}*/
  const result = await product_prices.findAll({
    attributes: ['product_id', [Sequelize.fn('max', Sequelize.col('price')), 'product_price']],
    group: ['product_id']
  })
  let indexArray = randomNumber.getArray(result);
  let priceArray = randomNumber.getChangePriceArray(result, indexArray);
  for (let index = 0; index < indexArray.length; index++) {
    await product_prices.update({
      price: priceArray[index]
    }, {
      where: { product_id: result[indexArray[index]].dataValues.product_id }
    })
  }
}
exports.getList = productPriceUpdate;