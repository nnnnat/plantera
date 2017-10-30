const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('./cors')
const routes = require('./routes')

// connecting to db
mongoose.connect('mongodb://localhost/plantera')
mongoose.Promise = global.Promise

// setting up app
const app = express()
app.use(bodyParser.json())
app.use(cors())
app.use(routes)

// error handle
app.use((err, req, res, next) => res.status(422).send({ error: err.message }))

// server
app.listen(4000, () => console.log('server running on port 4000'))
