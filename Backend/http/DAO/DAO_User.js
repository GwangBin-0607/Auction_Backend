//@ts-check
class DAO_User{
    /**
     * 
     * @param {number} user_id 
     * @param {string} user_name 
     */
    constructor(user_id,user_name){
        this.user_id = user_id
        this.user_name = user_name
    }
}
exports.DAO_User = DAO_User