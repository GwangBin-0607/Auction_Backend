const productCount = require('../../services/Product/product.count.service');

test('Product Price List', async () => {
        const data = await productCount.getList()
        expect(data).toBe(4);
   
    });