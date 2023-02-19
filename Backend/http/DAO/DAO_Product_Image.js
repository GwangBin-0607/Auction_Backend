//@ts-check
class DAO_Product_Image{
    /**
     * 
     * @param {String} image_url 
     * @param {number} product_id 
     * @param {number} image_id 
     * @param {number} priority 
     */
    constructor(image_url,product_id,image_id,priority){
        this.image_url = image_url
        this.image_id = image_id
        this.product_id = product_id
        this.priority = priority
    }
}
exports.DAO_Product_Image = DAO_Product_Image