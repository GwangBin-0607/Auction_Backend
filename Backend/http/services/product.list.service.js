const {products,product_images,product_prices} = require('../Database/models');

async function allProductList(){
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
    order:[['product_id','ASC'],[product_images,'priority','ASC']]
  });
  return result
}
exports.getList = allProductList;