// @ts-check

const transfer = require('../../socket/Transfer/dataTransfer');

test('Product Price List', () => {
    let jsonTwo = `{
        "dataType":2,
        "completionId":123,
        "data":{"product_id":1,"product_price":1100}
    }/{
        "dataType":1,
        "completionId":11,
        "data":{"stateNumber":1}
    }`
    let buffer = Buffer.from(jsonTwo);
    let trans = new transfer.class()
    let result = trans.dataToCompletion(buffer)
    expect(result.length).toBe(2)
});