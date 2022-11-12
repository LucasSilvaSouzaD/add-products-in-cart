const bodyParser = require('body-parser')
 
const product = require('./productRoute')
const cors = require('cors')

module.exports = app => {
 app.use(
   bodyParser.json(),
   bodyParser.urlencoded({ extended: false }),
   cors({
    origin: '*',
   }),
   product,

   )
 }