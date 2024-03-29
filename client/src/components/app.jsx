import React from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'
import { TransitionGroup } from 'react-transition-group'
// components
import Appear from './animations/appear'
import Fade from './animations/fade.jsx'
import Header from './partials/header'
import Plants from './views/plants'
import PlantForm from './views/plantForm'

export default withRouter(({ location }) => (
  <Fade appear in>
    <div className='app'>
      <Header />
      <TransitionGroup component='main'>
        <Appear key={location.pathname} slow>
          <Switch location={location}>
            <Route path='/add-plant' component={PlantForm} />
            <Route path='/edit-plant' render={({ location }) => <PlantForm plant={location.state} />} />
            <Route path='/' component={Plants} />
          </Switch>
        </Appear>
      </TransitionGroup>
    </div>
  </Fade>
))
