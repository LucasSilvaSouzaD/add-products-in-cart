const { addProductInCart } = require("../src/services/CartService");
const { findOne } = require("../src/services/ProductService");
const { verifyStock } = require("../src/services/ProductService");


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
    try {
      await addProductInCart(errorProductId, errorProductQty);
    } catch(e) {
      expect(e).toEqual("Não tem estoque para essa quantidade");
    }
  });

  test('Check if you add product with incorrect id', async () => {
    try {
      await addProductInCart(wrongProductId, wrongProductQty);
    } catch(e) {
      expect(e).toEqual('Id de produto incorreto, verifique por favor.')
    }
  });

  test('Incorrect quantity value', async () => {
    try {
      await addProductInCart(errorProductId, wrongQuantityInput);
    } catch(e) {
      console.log('error ==>', e)
      expect(e).toEqual("Informe uma valor numérico");
    }
  });

  /*
  quantidade desejada continua como 1, deveria ter somado?
  test('If the values have been updated', async () => {
    const response = await addProductInCart(successProductId, successProductQty);
    expect(response.quantityReserved).toEqual(1);
  });
  */
})

describe('Stock Validation', () => {
  test('Check valide stock', () => {
    const response = verifyStock(successProductId, successProductQty);
    expect(response.hasStock).toEqual(true)
  })

  test('Check overstock', () => {
    const response = verifyStock(errorProductId, errorProductQty);
    expect(response.hasStock).toEqual(false)
  })
})

describe("Get products", () => {
  test('Get product successfully', async () => {
    const response = await findOne(successProductId);
    expect(response).toBeDefined();
  });

  test('Check Invalid Product', async () => {
    try {
      await findOne(wrongProductId);
    } catch(e) {
      expect(e).toEqual('Id de produto incorreto, verifique por favor.')
    }
  });
  
})

