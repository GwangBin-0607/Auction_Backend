//@ts-check
class DTO_ResponseUpdateStreamProductPrice{
    /**
     * 
     * @param {number} product_id 
     * @param {Boolean} complete 
     */
    constructor(product_id,complete){
        this.product_id = product_id
        this.complete = complete
    }
}
exports.DTO_ResponseUpdateStreamProductPrice = DTO_ResponseUpdateStreamProductPrice