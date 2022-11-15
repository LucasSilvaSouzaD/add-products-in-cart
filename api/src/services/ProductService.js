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

      /*
      não consegui verificar o tipo number
      if(typeof quantity !== Number) {
        const response = "Informe uma valor numérico";
        return response
      }
      */

      console.log('passou do if', quantity)

        const product = productsBase.find(product => product.id == id)

      /*
      o if do estoque no CartService não deixa retornar a string correta
      if(!product) {
        const response = "Id de produto incorreto, verifique por favor.";
        return response
      }
      */

        const hasStock = product.inStock >= quantity

        const response = {
            id,
            hasStock,
        }
        
        return response

    }
}


module.exports = ProductService