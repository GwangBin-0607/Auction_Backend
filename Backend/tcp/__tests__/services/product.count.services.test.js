//@ts-check
const productCount = require('../../services/product.count.service');

test('Product Price Count', async () => {
        const data = await productCount.getList()
        expect(data).toBe(40);
   
    });