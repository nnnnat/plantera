import React from 'react'
import { Route } from 'react-router-dom'
// components
import Header from './header'
import List from './list'
import Form from './form'

const Routes = (props) => (
  <div className='app'>
    <Header />
    <main>
      <Route path='/' exact component={ List } />
      <Route path='/add-plant' component={ Form } />
    </main>
  </div>
)

export default Routes
