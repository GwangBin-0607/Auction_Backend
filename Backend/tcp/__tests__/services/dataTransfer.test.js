//@ts-check

const transfer = require('../../services/Transfer/dataTransfer');

test('Product Price List', () => {
    try {
        const data = transfer.dataTypeCheck("StreamStateUpdate");
        expect(data).toBe(transfer.InputTypes.StreamStateUpdate);

    } catch (error) {
        expect(error.message).toBe('Not Match InputType');
    }
});