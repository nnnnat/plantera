import React, { Component } from 'react'
import { connect } from 'react-redux'
// scripts
import { waterPlant } from './../../../scripts/actions'
import { nextDate } from './../../../scripts/dates'

const css = {
  background: 'transparent',
  borderRadius: '50%',
  border: '.125rem solid currentColor',
  cursor: 'pointer',
  padding: '1rem'
}

class WateredBtn extends Component {
  clicked () {
    const { plant, waterPlant } = this.props
    waterPlant({ ...plant, nextWater: nextDate(plant.waterInt) })
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
