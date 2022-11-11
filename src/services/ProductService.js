const productsBase = require('../database/products.json')

class ProductService {
    static findAll() {
        return productsBase
    }

    static findOne(id) {
        const product = productsBase.find(item => item.id == id)
        console.log(product)
        return product
    }
    
}


module.exports = ProductService