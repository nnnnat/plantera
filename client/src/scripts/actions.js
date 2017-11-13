import axios from 'axios'

// settings
const apiURL = `http://localhost:4000/plants`

// action types
export const GET_PLANTS = 'get_plants'
export const POST_PLANT = 'post_plant'
export const EDIT_PLANT = 'edit_plant'
export const WATER_PLANT = 'water_plant'
export const DELETE_PLANT = 'delete_plant'
export const COUNT = 'count'

// request init
const http = axios.create({ baseURL: apiURL })

// actions
// ===========================================

// if thirsty plants set notifications
export const setNotice = (count) => ({ type: COUNT, count })

// get plants from api
export const getPlants = () => ({
  type: GET_PLANTS,
  payload: http.get('')
})

// post a new plant to api
export const postPlant = (plant, callback) => ({
  type: POST_PLANT,
  payload: http.post('', plant)
    .then(() => callback())
})

// edit plant form setup
export const editPlant = (plant, callback) => ({
  type: EDIT_PLANT,
  payload: http.put(`/${plant._id}`, plant)
    .then(() => callback())
})

export const waterPlant = (plant) => ({
  type: WATER_PLANT,
  payload: http.put(`/${plant._id}`, plant)
})

// delete plant from api
export const deletePlant = () => ({
  type: DELETE_PLANT,
  payload: 'delete plant'
})
