const productsBase = require('../database/products.json')

class CartService {
    static findAll() {
        return productsBase
    }

    static findOne(id) {
        const product = productsBase.find(item => item.id == id)

        return product
    }
    
}


module.exports = CartService