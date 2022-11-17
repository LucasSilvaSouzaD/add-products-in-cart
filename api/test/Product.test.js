const { findOne, verifyStock } = require("../src/services/ProductService");



describe("Products Services", () => {
  test("search for specific product", async () => {
    const productId = 53412;
    const product = findOne(productId);

    const expected = {
      id: 53412,
      name: "Carrinho de Rolimã",
      inStock: 300,
      price: 10,
      maxCartQuantity: 5,
      imgBase64:
        "https://i.pinimg.com/564x/74/22/31/742231e8cc4ec58a874e005cabadb8d4.jpg",
    };

    expect(product).toEqual(expected);
  });

  test("product does not exist", async () => {
    const productId = 12311212
    expect(() => findOne(productId)).toThrow();
  });
});
