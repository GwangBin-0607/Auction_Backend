//@ts-check
const {DTO_Product_Price} = require('../DTO_Product_Price');
const {DTO_Product_UpDown} = require('../DTO_Product_UpDown');
class DTO_Product_Detail{
    /**
     * 
     * @param {DTO_Product_Detail_Info} detailProductInfo 
     * @param {DTO_Detail_Product_Images} detailProductImages 
     * @param {DTO_User} detailProductUser 
     * @param {DTO_Comment} detailProductComment 
     * @param {DTO_Graph} detailProductGraph 
     */
    constructor(detailProductInfo,detailProductImages,detailProductUser,detailProductComment,detailProductGraph){
        this.DetailProductInfo = detailProductInfo
        this.DetailProductImages = detailProductImages
        this.DetailProductUser = detailProductUser
        this.DetailProductComment = detailProductComment
        this.DetailProductGraph = detailProductGraph
    }
}
class DTO_Product_Detail_Info{
    /**
     * 
     * @param {number} product_id
     * @param {number} original_price
     * @param {DTO_Product_UpDown} checkUpDown 
     * @param {number} beforePrice
     */
    constructor(product_id,original_price,checkUpDown,beforePrice){
        this.product_id = product_id
        this.original_price = original_price
        this.checkUpDown = checkUpDown
        this.beforePrice = beforePrice
    }
}
class DTO_User{
    /**
     * 
     * @param {string} user_name 
     * @param {number} user_id 
     * @param {Array<DTO_Detail_Image>} user_image 
     */
    constructor(user_name,user_id,user_image){
        this.user_id = user_id
        this.user_name = user_name
        this.user_image = user_image
    }
}
class DTO_Detail_Product_Images{
    /**
     * 
     * @param {Array<DTO_Detail_Image>} images 
     */
    constructor(images){
        this.images = images
    }
}
class DTO_Detail_Image{
    /**
     * 
     * @param {number} image_id 
     */
    constructor(image_id){
        this.image_id = image_id;
    }
}
class DTO_Comment{
    /**
     * 
     * @param {string} comment 
     * @param {string} registerTime 
     * @param {string} product_name 
     */
    constructor(comment,registerTime,product_name){
        this.registerTime = registerTime
        this.comment = comment
        this.product_name = product_name
    }
}
class DTO_Graph{
    /**
     * 
     * @param {Array<DTO_Product_Price>} data 
     */
    constructor(data){
        this.data = data
    }
}
module.exports.DTO_Product_Detail = DTO_Product_Detail
module.exports.DTO_Product_Detail_Info = DTO_Product_Detail_Info
module.exports.DTO_User = DTO_User
module.exports.DTO_Detail_Image = DTO_Detail_Image
module.exports.DTO_Comment = DTO_Comment
module.exports.DTO_Graph = DTO_Graph
module.exports.DTO_Detail_Product_Images = DTO_Detail_Product_Images