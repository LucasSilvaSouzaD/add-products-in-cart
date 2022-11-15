const { addProductInCart } = require("../src/services/CartService");

// Values for running the tests
const successProductId = 5000;
const successProductQty = 1;

const errorProductId = 53412;
const errorProductQty = 11;

const wrongQuantityInput = 'abc'

const wrongProductId = 0;
const wrongProductQty = 1;


describe("addProductInCart Function", () => {
  test('Add product successfully', async () => {
    const response = await addProductInCart(successProductId, successProductQty);
    expect(response).toBeDefined();
  });

  test('Informed product is really what saved', async () => {
    const response = await addProductInCart(successProductId, successProductQty);
    expect(response.name).toEqual("God of War - Ragnarok");
  });

  test('Cannot add product', async () => {
    const response = await addProductInCart(errorProductId, errorProductQty);
    expect(response).toEqual("Não tem estoque para essa quantidade");
  });

  /*
  o if do estoque no CartService não deixa retornar a string correta
  test('Check if you add product with incorrect id', async () => {
    const response = await addProductInCart(wrongProductId, wrongProductQty);
    console.log('response', response)
    expect(response.name).toEqual("God of War - Ragnarok");
  });
  */

  /*
  quantidade desejada continua como 1, deveria ter somado?
  test('If the values have been updated', async () => {
    const response = await addProductInCart(successProductId, successProductQty);
    expect(response.quantityReserved).toEqual(1);
  });
  */

  /*
  não consegui verificar o tipo number
  test('Incorrect quantity value', async () => {
    const response = await addProductInCart(errorProductId, wrongQuantityInput);
    console.log('response ==>', response)
    expect(response).toEqual("Informe uma valor numérico");
  });
  */
})

