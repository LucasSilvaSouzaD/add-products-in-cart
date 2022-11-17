const { findOne, verifyStock } = require("../src/services/ProductService");

describe("Products Services", () => {
  test("search for specific product", async () => {
    const product = findOne(53412);

    const expected = {
      id: 53412,
      name: "Carrinho de Rolimã",
      inStock: 10,
      price: 10,
      maxCartQuantity: 5,
      imgBase64:
        "https://i.pinimg.com/564x/74/22/31/742231e8cc4ec58a874e005cabadb8d4.jpg",
    };

    expect(product).toEqual(expected);
  });

  test("product does not exist", async () => {
    expect(() => findOne(12311212)).toThrow();
  });

  test("in-stock product", async () => {
    const response = verifyStock(31532, 2);
    const expected = {
      id: 31532,
      hasStock: true
    };

    expect(response).toEqual(expected);
  });
});
