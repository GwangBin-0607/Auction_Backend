//@ts-check
const service = require('../../services/product.currentProductPrice.service');
test('Product Price Detail', async () => {
  /* const data = await usecase.getList(); 
    expect(usecase.getList()).toThrow()*/ //Error

  // await expect(usecase.getList()).toThrow(); //Error = ERR_UNHANDLED_REJECTION
  // const data = usecase.getList()
  // await expect(usecase.getList().count).resolves.toBe(5);
  let pro = new service.Current_ProductPrice_Service()
  const data = await pro.buyProduct(1)
  console.log(JSON.stringify(data));
  });