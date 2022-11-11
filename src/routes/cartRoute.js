const { Router } = require('express')

 
const router = Router()
router
 .get('/cart', () => console.log("eu"))

module.exports = router

