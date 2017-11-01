import React, { Component } from 'react'
// components
import { Form } from './Form'
import { Header } from './Header'
import { List } from './List'
// scripts
import { getPlants, postPlant } from './../scripts/utils'

export class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      plants: []
    }
  }

  componentWillMount () {
    getPlants().then((plants) => this.setState({ plants }))
  }

  addPlant (plant) {
    postPlant(plant).then((plant) => {
      const { plants } = this.state
      plants.push(plant)
      this.setState({ plants })
    })
  }

  updatePlant (plant) {
    console.dir(plant)
  }
  
  render () {
    return (
      <div>
        <Header />
        <Form addPlant={ this.addPlant.bind(this) } updatePlant={ this.updatePlant.bind(this) } />
        <List plants={ this.state.plants } />
      </div>
    )
  } 
}
