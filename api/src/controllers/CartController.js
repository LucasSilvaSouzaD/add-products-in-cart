const { addProductInCart } = require("../services/CartService");
const save = require("../utils/repository");

class CartController {
  static async addCart(req, res) {
    const { id, quantity } = req.body;

    try {
      const response = await addProductInCart(id, quantity);

      return res.status(200).json(response);

    } catch (error) {
      return res.status(403).json({message: error, code: 403});
    }
  }

  static async removeCart(id) {}
}

module.exports = CartController;
