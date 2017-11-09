import React, { Component } from 'react'
import { connect } from 'react-redux'
// scripts
import { putPlant } from './../../scripts/actions'
import { Dates } from './../../scripts/utils'

const d = new Dates()

class WateredBtn extends Component {
  clicked () {
    let { plant } = this.props
    plant.nextWater = d.nextDate(d.now(), plant.waterInt)
    this.props.putPlant(plant)
  }
  
  render () {
    const { plant } = this.props
    return (
      <button onClick={ (e) => this.clicked(plant) }>
        <span>Watered Plant</span>
      </button>
    )
  }
}

export default connect(null, { putPlant })(WateredBtn)
