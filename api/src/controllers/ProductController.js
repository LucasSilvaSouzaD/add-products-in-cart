const ProductService = require("../services/ProductService");

class ProductController {
  static async getListProducts(req, res) {
    const products = await ProductService.findAll()
    
    res.send(products)
  }

  static async getProduct(req, res) {
    const { id } = req.params;

    const product = await ProductService.findOne(id)

    res.send(product)
  }

  static async getProductStock(req, res) {
    const { id, quantity } = req.body

    const response = await ProductService.verifyStock(id, quantity)

    res.send(response)
  }
}

module.exports = ProductController;
