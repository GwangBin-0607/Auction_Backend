//@ts-check
const productListCount = require('../../services/product.price.update.service');

test('Product Find One With Product ID', async () => {
            const data = await productListCount.updateStreamProductPrice({
                product_id:2,
                product_price:38500
            })
            expect(data.complete).toEqual(true);

    });