const {product_images,product_prices} = require('../database/models');
 async function allProductPriceList(){
  const result = product_prices.findAll({
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
exports.getList = allProductPriceList;