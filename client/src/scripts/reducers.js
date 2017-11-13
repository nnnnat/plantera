import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import _ from 'lodash'
// scripts
import { GET_PLANTS, WATER_PLANT, COUNT } from './actions'

// reducers
const plantReducer = (state = {}, action) => {
  const { data } = (action.payload) ? action.payload : {}
  switch (action.type) {
    case GET_PLANTS:
      return _.mapKeys(data, '_id')
    case WATER_PLANT:
      return { ...state, [data._id]: data }
    default:
      return state
  }
}

const noticeReducer = (state = {}, action) => {
  switch (action.type) {
    case COUNT:
      return action.count
    default:
      return state
  }
}

// combined reducers
const reducers = combineReducers({
  plants: plantReducer,
  notice: noticeReducer,
  form: formReducer
})

export default reducers
