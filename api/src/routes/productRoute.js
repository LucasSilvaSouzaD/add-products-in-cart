const { Router } = require('express')
const ProductController = require('../controllers/ProductController')

const router = Router()
router
 .get('/product/:id', ProductController.getProduct)
 .get('/products', ProductController.getListProducts)
 .get('/stock', ProductController.getProductStock)


module.exports = router

