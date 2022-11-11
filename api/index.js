const express = require('express')
const routes = require('./src/routes')

const app = express()
const port = 3030

routes(app)
app.listen(port, () => console.log("On runing port " + port))