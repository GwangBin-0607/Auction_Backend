const usecase = require('../../usecase/product.list.usecase');
test('Product Price List', async () => {
  /* const data = await usecase.getList(); 
    expect(usecase.getList()).toThrow()*/ //Error

  // await expect(usecase.getList()).toThrow(); //Error = ERR_UNHANDLED_REJECTION
  // const data = usecase.getList()
  // await expect(usecase.getList().count).resolves.toBe(5);
  const data = await usecase.getList()
  expect(data.length).toBe(3);
  });