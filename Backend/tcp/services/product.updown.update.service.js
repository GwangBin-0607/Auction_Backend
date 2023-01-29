//@ts-check
const {product_updowns } = require('../Database/models');

/**
 * 
 * @param {number} product_id 
 */
 async function updateProductUpDown(product_id){
  await product_updowns.update({
    state: true
  }, {
    where: [{ product_id: product_id}]
  })
}
exports.updateProductUpDown = updateProductUpDown;