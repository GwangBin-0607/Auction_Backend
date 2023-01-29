//@ts-check
const priceWithUpDown = require('../../services/product.priceWithUpDown.one.service');

test('Product Price With UpDown', async () => {
    const data = await priceWithUpDown.findProductPriceOneWithUpDown(1);
    
            expect(data.product_id).toEqual(1);
            expect(data.product_price).toEqual(7000);
            expect(data.state).toEqual(true);

    });