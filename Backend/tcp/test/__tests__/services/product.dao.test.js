//@ts-check
const {Product_Price_DAO} = require('../../DAO/Product_Price');

test('Product Price DAO', async () => {
    let property = new Product_Price_DAO()
    let result = await property.findProductPriceRecent(1)
    expect(result).toHaveProperty("product_id",1);
    });