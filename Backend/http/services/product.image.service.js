//@ts-check
const {images} = require('../Database/models');
const {DAO_Product_Image} = require('../DAO/DAO_Product_Image');
const fs = require('fs').promises;
/**
 * 
 * @param {String} imageURL 
 * @returns 
 */
async function returnImage(imageURL){
    var file = await fs.readFile(imageURL)
    return file
}
/**
 * 
 * @param {number} image_id 
 * @throws
 */
async function imageIdToURL(image_id){
    /**
     * @type {DAO_Product_Image}
     */
    let returnImages = await images.findOne({
        where: { image_id: image_id }
    })
    return await returnImage(returnImages.image_url) 
}
exports.getImage = imageIdToURL