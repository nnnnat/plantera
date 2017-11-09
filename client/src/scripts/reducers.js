import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import _ from 'lodash'
// scripts
import { Dates } from './utils'
import { GET_PLANTS } from './actions'
//_.mapKeys(data, '_id')
const d = new Dates()

const splitPlants = (plants) => {
  const thirsty = _.mapKeys(_.filter(plants, (p) => d.passed(p.nextWater)), '_id')
  const fine = _.mapKeys(_.filter(plants, (p) => !d.passed(p.nextWater)), '_id')
  return { thirsty, fine }
}

// reducers
const plantReducer = (state = {}, action) => {
  const { data } = (action.payload) ? action.payload : {}
  switch(action.type) {
  case GET_PLANTS:
    return splitPlants(data)
  default:
    return state
  }
}

// combined reducers
const reducers = combineReducers({
  plants: plantReducer,
  form: formReducer
})

export default reducers
