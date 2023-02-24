//@ts-check
class DAO_User_Image{
    /**
     * 
     * @param {number} user_id 
     * @param {number} priority 
     * @param {number} product_id
     */
    constructor(user_id,priority,product_id){
        this.user_id = user_id
        this.priority = priority
        this.product_id = product_id
    }
}
exports.DAO_User_Image = DAO_User_Image