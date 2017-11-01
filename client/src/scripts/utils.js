import axios from 'axios'

const http = axios.create({
  baseURL: 'http://localhost:4000/plants'
})

// get plants from api
//export const getPlants = () => http.get('')

// post plant to api
// export const postPlant = (plant) => http.post('', plant)


// api config
const apiURL = 'http://localhost:4000/plants'


// get plants from api
export const getPlants = () => fetch(apiURL, { method: 'GET' }).then(res => res.json())

// post plant to api
export const postPlant = (plant) => {
  return fetch(apiURL, {
    method: 'POST',
    body: JSON.stringify(plant),
    headers: new Headers({ 'Content-Type': 'application/json' })
  }).then(res => res.json())
}
