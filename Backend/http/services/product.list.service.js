//@ts-check
const {products,product_images,product_prices} = require('../Database/models');

/**
 * 
 * @param {number} offset 
 * @param {number} limit 
 * @returns 
 */
async function allProductList(offset,limit){
  let startIndex = offset*limit;
  const result = await products.findAll({
    include:[
      {
        model:product_images,
        order:[['main_image','DESC']],
        attributes:[['image_url','url']]
      },{
        model:product_prices
      }
    ],
    offset:startIndex,
    limit:limit,
    order:[['product_id','ASC'],[product_images,'priority','ASC']]
  });
  return result
}
exports.getList = allProductList;