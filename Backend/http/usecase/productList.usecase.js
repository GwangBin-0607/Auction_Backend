const {products,product_images,product_prices} = require('../Database/models');

async function allProductList(){
  const result = await products.findAll({
    include:[
      {
        model:product_images,
        attributes:[['image_url','url']],
        where:{
          main_image:1
        }
      }
    ]
  }).catch((err) => console.log(err));
  return result
}
exports.getList = allProductList;