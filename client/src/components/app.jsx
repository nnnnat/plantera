import React from 'react'
import { Route } from 'react-router-dom'
// components
import Header from './blocks/header'
import Plants from './views/plants'
import PlantForm from './views/plantForm'

const App = (props) => (
  <div className='app'>
    <Header />
    <main>
      <Route path='/' exact component={Plants} />
      <Route path='/add-plant' component={PlantForm} />
      <Route path='/edit-plant' render={({ location }) => <PlantForm plant={location.state} />} />
    </main>
  </div>
)

export default App
