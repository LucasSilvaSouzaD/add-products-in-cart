const { addProductInCart } = require("../src/services/CartService");

// Values for running the tests
const successProductId = 5000;
const successProductQty = 1;

const errorProductId = 53412;
const errorProductQty = 11;


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

  test('out-of-stock product', async () => {
    try {
      await addProductInCart(errorProductId, errorProductQty);
    } catch (error) {
      expect(error).toBe("We do not have stock for this quantity")
    }

  });

})

