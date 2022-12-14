const db = require(global.databaseModelsPath);
const allProductList = async () => {
  const result = await db.products.findAll({
    include:[
      {
        model:db.product_images
      }
    ],
    raw: true
  }).catch((err) => console.log(err));
  console.log(result);
  return result
}
module.exports.allProductList = allProductList;