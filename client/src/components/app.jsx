import React from 'react'
import { Route } from 'react-router-dom'
// components
import Header from './blocks/header'
import Plants from './views/plants'
import AddPlant from './views/addPlant'

const App = (props) => (
  <div className='app'>
    <Header />
    <main>
      <Route path='/' exact component={ Plants } />
      <Route path='/add-plant' component={ AddPlant } />
    </main>
  </div>
)

export default App
