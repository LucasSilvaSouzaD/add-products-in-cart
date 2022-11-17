const productsBase = require('../database/products.json')

class ProductService {
    static findAll() {
        return productsBase
    }

    static findOne(id) {
        const product = productsBase.find(product => product.id == id)

        if(!product) throw 'Product does not exist'

        return product
    }
    
    static verifyStock(id, quantity) {

        const product = productsBase.find(product => product.id == id)

        if(!product) throw 'Product does not exist'

        const hasStock = product.inStock >= quantity

        const response = {
            id,
            hasStock,
        }
        
        return response

    }
}


module.exports = ProductService