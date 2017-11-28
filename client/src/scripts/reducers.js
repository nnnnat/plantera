import { combineReducers } from 'redux'
// scripts
import { GET_PLANTS, WATER_PLANT, DELETE_PLANT, COUNT } from './actions'

const plants = (state = [], action) => {
  const { payload } = action
  switch (action.type) {
    case GET_PLANTS:
      return payload.data
    case WATER_PLANT:
      const updateIndex = state.findIndex((p) => p._id === payload.data._id)
      return [
        ...state.slice(0, updateIndex),
        payload.data,
        ...state.slice(updateIndex + 1)
      ]
    case DELETE_PLANT:
      let deleteIndex = state.findIndex((p) => p._id === payload)
      return [
        ...state.slice(0, deleteIndex),
        ...state.slice(deleteIndex + 1)
      ]
    default:
      return state
  }
}

const notice = (state = 0, action) => {
  switch (action.type) {
    case COUNT:
      return action.count
    default:
      return state
  }
}

// combined reducers
export default combineReducers({ plants, notice })
