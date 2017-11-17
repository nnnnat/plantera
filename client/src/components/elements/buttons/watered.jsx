import React, { Component } from 'react'
import { connect } from 'react-redux'
// scripts
import { waterPlant } from './../../../scripts/actions'
import * as d from './../../../scripts/dates'

const css = {
  background: 'transparent',
  borderRadius: '50%',
  border: '.125rem solid currentColor',
  cursor: 'pointer',
  padding: '1rem'
}

class WateredBtn extends Component {
  clicked () {
    let { plant } = this.props
    plant.nextWater = d.nextDate(d.now(), plant.waterInt)
    this.props.waterPlant(plant)
  }

  render () {
    const { plant } = this.props
    return (
      <button className='tx--primary' style={css} onClick={(e) => this.clicked(plant)}>
        <span className='sr'>Watered Plant</span>
      </button>
    )
  }
}

export default connect(null, { waterPlant })(WateredBtn)
