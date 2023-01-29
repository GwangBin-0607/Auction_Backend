//@ts-check
const productListCount = require('../../services/product.one.service');

test('Product Find One With Product ID', async () => {
        try {
            const data = await productListCount.getList(1)
            expect(data).toHaveProperty("product_id",1);
        } catch (error) {
            console.log(error);
        }
   
    });