import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import _ from 'lodash'
// action types
import { GET_PLANTS } from './actions'

// reducers
const plantReducer = (state = {}, action) => {
  const { data } = (action.payload) ? action.payload : {}
  switch(action.type) {
  case GET_PLANTS:
    return _.mapKeys(data, '_id')
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