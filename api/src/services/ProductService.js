const productsBase = require('../database/products.json')

class ProductService {
    static findAll() {
        return productsBase
    }

    static findOne(id) {
        const product = productsBase.find(product => product.id == id)

        return product
    }
    
    static verifyStock(id, quantity) {
        const product = productsBase.find(product => product.id == id)

        const hasStock = product.inStock >= quantity

        const response = {
            id,
            hasStock,
        }
        
        return response

    }
}


module.exports = ProductService