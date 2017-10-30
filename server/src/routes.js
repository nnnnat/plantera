const express = require('express')
const Plant = require('./models')
const router = express.Router()

// get list of plants from db
router.get('/plants', (req, res, next) => {
  Plant.find({})
    .then(plants => res.send(plants))
    .catch(next)
})

// post new plant to db
router.post('/plants', (req, res, next) => {
  Plant.create(req.body)
    .then(plant => res.send(plant))
    .catch(next)
})

// update plant by id in db
router.put('/plants/:id', (req, res, next) => {
  Plant.findByIdAndUpdate({ _id: req.params.id }, req.body)
    .then(plant => {
      Plant.findOne({ _id: req.params.id })
        .then(plant => res.send(plant))
        .catch(next)
    })
    .catch(next)
})

// delete plant by id in db
router.delete('/plants/:id', (req, res, next) => {
  Plant.findByIdAndRemove({ _id: req.params.id })
    .then(plant => res.send(plant))
    .catch(next)
})

// exporting the module
module.exports = router
