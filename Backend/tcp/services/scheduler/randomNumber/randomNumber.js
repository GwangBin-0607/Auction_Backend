// @ts-check
function getRandomInt(min,max){
    return Math.floor(Math.random()*(max-min))+min;
}
    /**
 * @typedef {Object} Product_Price
 * @property {number} product_id
 * @property {number} product_price
 */

/**
 *@param {Array.<{dataValues:Product_Price}>} array
 *@param {Array.<number>} indexArray
 *@returns {Array.<number>}
 */
function returnChangeArray(array,indexArray){
    /** @type {Array.<number>} */
    let changePriceArray=new Array();
    for(let i=0;i<indexArray.length;i++){
        let before = array[indexArray[i]].dataValues.product_price
        if(Math.random() < 0.5){
            changePriceArray.push(before+500);
        }else{
            if (before-500<=0){
                changePriceArray.push(before+500);
            }else{
                changePriceArray.push(before-500);
            }
        }
    }
    return changePriceArray
}
/**
 * 
 * @param {Array.<{dataValues:Product_Price}>} array
 * @returns {Array.<number>}
 */
function getArray(array){
    let setValue = new Set()
    let randomCount = getRandomInt(1,array.length)
    for(let i=0;i<randomCount;i++){
        let randomNumber = getRandomInt(0,array.length)
        setValue.add(randomNumber)
    }
    return Array.from(setValue)
}
module.exports.getArray = getArray
module.exports.getChangePriceArray = returnChangeArray