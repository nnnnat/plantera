// styles
import './styles/base'
// react + redux
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import promise from 'redux-promise'
import { BrowserRouter as Router } from 'react-router-dom'
// scripts
import reducers from './scripts/reducers'
// components
import App from './components/app'

const middlewareStore = applyMiddleware(promise)(createStore)
const rootEl = document.getElementById('root')
render(
    <Provider store={middlewareStore(reducers)}>
      <Router>
        <App />
      </Router>
    </Provider>
    , rootEl)
