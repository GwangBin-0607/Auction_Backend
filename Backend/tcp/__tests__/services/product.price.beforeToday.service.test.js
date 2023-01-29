//@ts-check
const productListCount = require('../../services/product.price.one.service');

test('Product Find Before Today', async () => {
            const data = await productListCount.findProductPriceBeforeToday(1);
            expect(data).toEqual(true);

    });