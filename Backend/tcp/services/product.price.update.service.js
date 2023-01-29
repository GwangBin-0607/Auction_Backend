//@ts-check
const { product_prices } = require('../Database/models');
const { findProductPriceBeforeToday } = require('./product.price.one.service')
const { updateProductUpDown } = require('./product.updown.update.service');
const { getToday } = require('../time');
const {findProductUpDown} = require('./product.updown.one.service')


/**
 * @typedef {Object} StreamProductPrice
 * @property {number} product_id
 * @property {number} product_price
 */
/**
 * @typedef {Object} ReturnStreamProductPrice
 * @property {number} product_id
 * @property {number} product_price
 * @property {Boolean} state
 * @property {Boolean} complete
 */
/**
 * 
 * @param {StreamProductPrice} streamProductPrice
 * @param {String} auction_date
 * @returns {Promise<Boolean>}
 */
async function updateProduct_Price(streamProductPrice, auction_date) {
  let resultArray = await product_prices.update({
    price: streamProductPrice.product_price
  }, {
    where: [{ product_id: streamProductPrice.product_id, auction_date: auction_date }]
  })
  if (resultArray[0] == 0) {
    return false
  } else {
    return true
  }
}

/**
 * 
 * @param {StreamProductPrice} streamProductPrice
 * @param {String} auction_date 
 * @returns {Promise<Boolean>}
 */
async function insertProduct_Price(streamProductPrice, auction_date) {
  try {
    let result = await product_prices.create({
      product_id: streamProductPrice.product_id,
      price: streamProductPrice.product_price,
      auction_date: auction_date
    })
    console.log("====")
    console.log(result)
    return true
  } catch {
    return false
  }
}

/**
 * @param {StreamProductPrice} streamProductPrice
 * @returns {Promise<Boolean>}
 */
async function productPriceUpdate(streamProductPrice) {
  try {
    let product = await findProductPriceBeforeToday(streamProductPrice.product_id);
    if (updatable(product.price, streamProductPrice.product_price)) {
      if (product.auction_date == getToday()) {
        return await updateProduct_Price(streamProductPrice, getToday());
      } else {
        return await insertProduct_Price(streamProductPrice, getToday());
      }
    } else {
      return false
    }
  } catch {
    return false
  }
}
/**
 * 
 * @param {StreamProductPrice} streamProductPrice
 * @returns {Promise<Boolean>}
 */
async function update(streamProductPrice) {

  let updateResult = await productPriceUpdate(streamProductPrice);
  if (updateResult) {
    await updateProductUpDown(streamProductPrice.product_id);
    return true
  } else {
    return false
  }
}
/**
 * @param {StreamProductPrice} streamProductPrice
 * @returns {Promise<ReturnStreamProductPrice>}
 */
async function updateProductPrice(streamProductPrice) {
  let completeUpdate = await update(streamProductPrice);
  return {
    product_id:streamProductPrice.product_id,
    product_price:streamProductPrice.product_price,
    state: (await findProductUpDown(streamProductPrice.product_id)).state,
    complete:completeUpdate
  }
}

/**
 * 
 * @param {number} beforePrice 
 * @param {number} afterPrice 
 * @returns {Boolean}
 */
function updatable(beforePrice, afterPrice) {
  if (beforePrice >= afterPrice) {
    return false
  } else {
    return true
  }
}
exports.getList = productPriceUpdate;
exports.updateStreamProductPrice = updateProductPrice