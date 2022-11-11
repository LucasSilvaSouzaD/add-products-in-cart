const bodyParser = require('body-parser')
 
const product = require('./productRoute')


module.exports = app => {
 app.use(
   bodyParser.json(),
   bodyParser.urlencoded({ extended: false }),
   product
   )
 }