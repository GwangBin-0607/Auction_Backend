//@ts-check
const { DTO_RequestInsertRecipe } = require('../../../DTO/DTO_RequestInsertRecipe');
const {Recipe_Repository} = require('../../../Repository/Recipe');

test('Product Price DAO', async () => {
    let property = new Recipe_Repository()
    try {
        let result = await property.insertOrUpdate(new DTO_RequestInsertRecipe(1,13,5000));
        console.log(result);
        expect(result).toHaveProperty("product_id",13);
    } catch (error) {
        console.log(error);
    }
    });