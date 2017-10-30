import React, { Component } from 'react'
import { Header } from './Header'
import { List } from './List'
// scripts
import { bogus } from '../scripts/utils'

//const plants = bogus()

export class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      plants: []
    }
  }

  componentWillMount () {
    const req = new Request('http://localhost:4000/plants', { method: 'GET'})
    fetch(req)
      .then(res => res.json())
      .then(plants => this.setState({ plants }))
  }
  
  render () {
    return (
      <div>
        <Header />
        <List plants={ this.state.plants } />
      </div>
    )
  } 
}
