const express = require('express')
const bodyParser = require('body-parser')
const routes = require('./routes')

// setting up app
const app = express()
app.use(bodyParser.json())
app.use(routes)


// server
app.listen(4000, () => console.log('server running on port 4000'))
