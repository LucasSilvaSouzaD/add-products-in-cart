const productsBase = require("../database/products.json");
const cartBase = require("../database/cart.json");
const { save, update } = require("../utils/repository");
const { findOne, verifyStock } = require("./ProductService");

class CartService {
  static findAll() {
    return productsBase;
  }

  static async addProductInCart(id, quantity) {
    const { hasStock } = verifyStock(id, quantity);
    console.log('chegou addProductInCart')

    if (!hasStock) throw "Não tem estoque para essa quantidade";

    const hasProductInCart = cartBase.find((item) => item.id == id);

    const {inStock, name} = findOne(id);

    const response = {
        id,
        inStock,
        name,
        quantityReserved: quantity
    }

    if (!hasProductInCart) return save(response, "cart");

    return update(response, "cart")

  }
}

module.exports = CartService;
