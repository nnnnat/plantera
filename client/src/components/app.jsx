import React from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'
// components
import Header from './partials/header'
import Plants from './views/plants'
import PlantForm from './views/plantForm'

const App = withRouter(({ location }) => (
  <div className='app'>
    <Header />
    <main>
      <Switch location={location}>
        <Route path='/add-plant' component={PlantForm} />
        <Route path='/edit-plant' render={({ location }) => <PlantForm plant={location.state} />} />
        <Route path='/' component={Plants} />
      </Switch>
    </main>
  </div>
))

export default App
