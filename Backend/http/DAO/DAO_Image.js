//@ts-check
class DAO_Image{
    /**
     * 
     * @param {number} image_id 
     * @param {string} image_url 
     */
    constructor(image_id,image_url){
        this.image_id = image_id
        this.image_url = image_url
    }
}
exports.DAO_Image = DAO_Image