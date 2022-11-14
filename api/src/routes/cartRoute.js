const { Router } = require('express')
const { addCart, removeCart } = require('../controllers/CartController')


 
const router = Router()
router
 .post('/cart', addCart)
 .delete('/cart/:id', removeCart)

module.exports = router

