const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PlantSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Plant name is required']
  },
  species: {
    type: String,
    required: [true, 'Plant species is required']
  },
  imgURL: {
    type: String,
    default: 'http://placehold.it/32x32'
  },
  waterInt: {
    type: Number,
    required: [true, 'A water interval is required']
  },
  nextWater: {
    type: String
  } 
})

const Plant = mongoose.model('plant', PlantSchema)

module.exports = Plant
