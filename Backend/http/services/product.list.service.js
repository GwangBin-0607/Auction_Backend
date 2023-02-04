//@ts-check
const {products,product_images,product_prices,product_updowns} = require('../Database/models');
const { DTO_Product } = require('../DTO/DTO_Product');
const { DTO_Product_BeforePrice } = require('../DTO/DTO_Product_BeforePrice');
const { DTO_Product_Images } = require('../DTO/DTO_Product_Images');
const { DTO_Product_Price } = require('../DTO/DTO_Product_Price');
const { DTO_Product_Price_BeforePrice } = require('../DTO/DTO_Product_Price_BeforePrice');
const { DTO_Product_UpDown } = require('../DTO/DTO_Product_UpDown');
/**
 * 
 * @param {number} offset 
 * @param {number} limit 
 * @returns {Promise<Array<DTO_Product>>}
 */
async function allProductList(offset,limit){
  let startIndex = offset*limit;
  const result = await products.findAll({
    include:[
      {
        model:product_images,
        order:[['main_image','DESC']],
        attributes:['image_url']
      },{
        model:product_prices,
        order:[['auction_date','DESC']],
        limit:1,
        attributes:['auction_date','price']
      },{
        model:product_updowns,
        attributes:['state']
      }
    ],
    offset:startIndex,
    limit:limit,
    order:[['product_id','ASC'],[product_images,'priority','ASC']]
  });
  /**
   * @type {Array<DTO_Product>}
   */
  let resultArray = []
  for(let product of result){
    let product_images = []
    for (let images of product.Product_Images){
      product_images.push(new DTO_Product_Images(images.image_url))
    }
    let product_updown = new DTO_Product_UpDown(product.Product_UpDown.state)
    let product_price = new DTO_Product_Price(product.Product_Prices[0].auction_date,product.Product_Prices[0].price)
    resultArray.push( new DTO_Product(product.product_id,product.product_name,product.product_price,product_images,product_updown,product_price))
  }
  // return result
  return resultArray
}

/**
 * 
 * @param {number} offset 
 * @param {number} limit 
 * @returns {Promise<Array<DTO_Product_BeforePrice>>}
 */
async function allProductListBeforePrice(offset,limit){
  let startIndex = offset*limit;
  const result = await products.findAll({
    include:[
      {
        model:product_images,
        order:[['main_image','DESC']],
        attributes:['image_url']
      },{
        model:product_prices,
        order:[['auction_date','DESC']],
        limit:2,
        attributes:['auction_date','price']
      },{
        model:product_updowns,
        attributes:['state']
      }
    ],
    offset:startIndex,
    limit:limit,
    order:[['product_id','ASC'],[product_images,'priority','ASC']]
  });
  /**
   * @type {Array<DTO_Product_BeforePrice>}
   */
  let resultArray = []
  for(let product of result){
    let product_images = []
    for (let images of product.Product_Images){
      product_images.push(new DTO_Product_Images(images.image_url))
    }
    let product_updown = new DTO_Product_UpDown(product.Product_UpDown.state)
    /**@type {DTO_Product_Price_BeforePrice} */
    let product_price;
    if (product.Product_Prices.length == 1){
      let gap = product.Product_Prices[0].price - product.product_price
      product_price = new DTO_Product_Price_BeforePrice(product.Product_Prices[0].auction_date,product.Product_Prices[0].price,gap)
    }else{
      let gap = product.Product_Prices[0].price - product.Product_Prices[1].price
      product_price = new DTO_Product_Price_BeforePrice(product.Product_Prices[0].auction_date,product.Product_Prices[0].price,gap)
    }
    resultArray.push( new DTO_Product_BeforePrice(product.product_id,product.product_name,product.product_price,product_images,product_updown,product_price))
  }
  // return result
  return resultArray
}
exports.getList = allProductList;
exports.beforePriceList = allProductListBeforePrice