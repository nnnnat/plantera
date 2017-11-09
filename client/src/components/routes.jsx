import React from 'react'
import { Route } from 'react-router-dom'
// components
import Header from './blocks/header'
import List from './blocks/list'
import Form from './views/form'

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
