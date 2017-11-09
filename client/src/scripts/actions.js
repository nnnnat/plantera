import axios from 'axios'

// settings
const apiURL = `http://localhost:4000/plants`

// action types
export const GET_PLANTS = 'get_plants'
export const POST_PLANT = 'post_plant'
export const PUT_PLANT = 'put_plant'
export const DELETE_PLANT = 'delete_plant'

// request init
const http = axios.create({ baseURL: apiURL })

// actions
// ===========================================

// get plants from api
export const  getPlants = () => ({
  type: GET_PLANTS,
  payload: http.get('')
})

// post a new plant to api
export const postPlant = (plant, callback) => ({
  type: POST_PLANT,
  payload: http.post('', plant).then(() => callback())
})

// put plant updates to api
export const putPlant = () => ({
  type: PUT_PLANT,
  payload: 'updated plant'
})

// delete plant from api
export const deletePlant = () => ({
  type: DELETE_PLANT,
  payload: 'delete plant'
})
