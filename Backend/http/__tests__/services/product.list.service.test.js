const usecase = require('../../services/product.list.service');
test('Product Price List', async () => {
  /* const data = await usecase.getList(); 
    expect(usecase.getList()).toThrow()*/ //Error

  // await expect(usecase.getList()).toThrow(); //Error = ERR_UNHANDLED_REJECTION
  // const data = usecase.getList()
  // await expect(usecase.getList().count).resolves.toBe(5);
  const data = await usecase.getList(0,10)
  console.log(data[0].dataValues);
  expect(data.length).toBe(3);
  });