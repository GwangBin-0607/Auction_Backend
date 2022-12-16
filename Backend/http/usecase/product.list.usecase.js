const {products,product_images,product_prices} = require('../database/models');

async function allProductList(){
  const result = await products.findAll({
    include:[
      {
        model:product_images,
        attributes:[['image_url','url']],
        where:{
          main_image:1
        }
      },{
        model:product_prices
      }
    ]
  })
  return result
}
exports.getList = allProductList;