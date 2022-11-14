const { Router } = require('express')
const { getProduct, getListProducts, getProductStock} = require('../controllers/ProductController')

const router = Router()
router
 .get('/product/:id', getProduct)
 .get('/products', getListProducts)
 .get('/stock', getProductStock)


module.exports = router

