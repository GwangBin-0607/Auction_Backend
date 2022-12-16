const usecase = require('../../usecase/product.price.usecase');
test('Product Price List', async () => {
  /* const data = await usecase.getList(); 
    expect(usecase.getList()).toThrow()*/ //Error

  // await expect(usecase.getList()).toThrow(); //Error = ERR_UNHANDLED_REJECTION
  const data = usecase.getList()
  await expect(data).rejects.toThrow();
  });