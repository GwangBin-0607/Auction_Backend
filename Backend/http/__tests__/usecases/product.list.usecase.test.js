const usecase = require('../../usecase/product.list.usecase');
test('Product Price List', async () => {
  /* const data = await usecase.getList(); 
    expect(usecase.getList()).toThrow()*/ //Error

  // await expect(usecase.getList()).toThrow(); //Error = ERR_UNHANDLED_REJECTION
  // const data = usecase.getList()
  // await expect(usecase.getList().count).resolves.toBe(5);
  // const testColumns = ['product_id','auction_date','auction_num','price']; 
  const data = await usecase.getList()
  console.log(Object.keys(data.dataValues))
  expect(Object.keys(data.dataValues)).toStrictEqual(testColumns);
  });