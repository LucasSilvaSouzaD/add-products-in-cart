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
      if(typeof quantity !== 'number') {
        throw "Informe uma valor numérico";
      }

        const product = productsBase.find(product => product.id == id)


      if(!product) {
        throw "Id de produto incorreto, verifique por favor.";
      }

        const hasStock = product.inStock >= quantity

        const response = {
            id,
            hasStock,
        }
        
        return response

    }
}


module.exports = ProductService