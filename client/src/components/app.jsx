import React from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
// components
import Header from './blocks/header'
import Plants from './views/plants'
import PlantForm from './views/plantForm'

const App = withRouter(({ location }) => (
  <div className='app'>
    <Header />
    <main>
      <TransitionGroup>
        <CSSTransition key={location.key} classNames='view' timeout={1000}>
          <Switch location={location}>
            <Route path='/add-plant' component={PlantForm} />
            <Route path='/edit-plant' render={({ location }) => <PlantForm plant={location.state} />} />
            <Route path='/' exact component={Plants} />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </main>
  </div>
))

export default App
