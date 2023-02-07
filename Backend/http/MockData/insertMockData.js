//@ts-check
const {getAllProductList} = require('./product.list')
const {product_prices,product_updowns} = require('../Database/models');

async function insertProduct_UpDown(){
        let allList = await getAllProductList()
        for(let i=0;i<allList.length;i++){
            await product_prices.create({
                product_id:allList[i].dataValues.product_id,
                price:allList[i].dataValues.product_price,
                auction_date:mockInsertYesterday()
            })
            await product_updowns.create({
                product_id:allList[i].dataValues.product_id
            })
        }

}
function mockInsertYesterday(){
    var date = new Date();
    var year = date.getFullYear();
    var month = ("0" + (1 + date.getMonth())).slice(-2);
    var day = ("0" + (date.getDate()-1)).slice(-2);
  
    return year + "-" + month + "-" + day;
  }
module.exports.insertProduct_UpDown = insertProduct_UpDown