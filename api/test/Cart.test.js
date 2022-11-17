const { addProductInCart } = require("../src/services/CartService");
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
    console.log("response", response)
    expect(response.name).toEqual("God of War - Ragnarok");
  });

  test('Check if you add product with incorrect id', async () => {
    try {
      await addProductInCart(wrongProductId, wrongProductQty);
    } catch(e) {
      expect(e).toEqual('Product does not exist')
    }
  });

  test('Incorrect quantity value', async () => {
    try {
      await addProductInCart(errorProductId, wrongQuantityInput);
    } catch(e) {
      console.log('error ==>', e)
      expect(e).toEqual("We do not have stock for this quantity");
    }
  });

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

