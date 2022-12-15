const {products,product_images} = require('../Database/models');
const allProductList = async () => {
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
  console.log(result);
  return result
}
exports.getList = allProductList;