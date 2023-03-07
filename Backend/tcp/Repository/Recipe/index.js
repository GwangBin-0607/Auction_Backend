//@ts-check
const {recipes} = require('../../Database/models')
const {DTO_RequestInsertRecipe} = require('../../DTO/DTO_RequestInsertRecipe')
class Recipe_Repository{
    /**
     * 
     * @param {DTO_RequestInsertRecipe} requestRecipe 
     * @returns {Promise<Boolean>}
     */
    async insertOrUpdate(requestRecipe){
        try {
            await this.insertRecipe(requestRecipe)
            return true
        } catch (error) {
            if(await this.updateRecipe(requestRecipe)[0] == 0){
                return false
            }else{
                return true
            }
        }
    }
    /**
     * 
     * @param {DTO_RequestInsertRecipe} requestRecipe
     * @throws 
     * @private
     */
    async insertRecipe(requestRecipe){
            await recipes.create({
                user_id:requestRecipe.user_id,
                product_id:requestRecipe.product_id,
                product_price:requestRecipe.product_price
            })
    }
    /**
     * @param {DTO_RequestInsertRecipe} requestRecipe
    * @returns {Promise<Array<number>>} [0] => No Update, [count] => Product updated as many as count
    * @private
    */
        async updateRecipe(requestRecipe) {
            return await recipes.update({
                product_price: requestRecipe.product_price,
            }, {
                where: { product_id: requestRecipe.product_id,user_id:requestRecipe.user_id }
            })
        }
}
module.exports.Recipe_Repository = Recipe_Repository