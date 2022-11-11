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
}

module.exports = ProductController;
