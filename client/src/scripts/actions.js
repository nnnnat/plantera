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
export const  getPlants = () => ({
  type: GET_PLANTS,
  payload: http.get('')
})
