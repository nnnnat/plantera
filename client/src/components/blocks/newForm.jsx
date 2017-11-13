import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
// scripts
import { postPlant, editPlant } from './../../scripts/actions'
import { Dates } from './../../scripts/utils.js'
// components
import TextField from './../elements/fields/text'
import RangeField from './../elements/fields/range'

const d = new Dates()

class NewForm extends Component {
  constructor (props) {
    super(props)
    const { edit } = this.props
    this.state = {
      name: (edit) ? edit.name : '',
      species: (edit) ? edit.species : '',
      waterInt: (edit) ? edit.waterInt : 14,
      _id: (edit) ? edit._id : null
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange (name, value) {
    this.setState({ [name]: value })
  }

  onSubmit (e) {
    e.preventDefault()
    const { history, postPlant, editPlant } = this.props
    const { name, species, waterInt, _id } = this.state
    let plant = { name, species, waterInt }

    if (_id) {
      plant = { ...plant, _id }
      editPlant(plant, () => history.push('/'))
    } else {
      plant = { ...plant, nextWater: d.nextDate(d.now(), waterInt) }
      postPlant(plant, () => history.push('/'))
    }
  }

  render () {
    const { name, species, waterInt, _id } = this.state
    return (
      <form onSubmit={this.onSubmit}>
        <TextField label='Nickname' name='name' value={name} onChange={this.onChange} />
        <TextField label='Species' name='species' value={species} onChange={this.onChange} />
        <RangeField label='Watering Interval' name='waterInt' value={waterInt} onChange={this.onChange} />
        <div className='gp--left pd2--y'>
          <button className='btn--primary' type='submit'>{ _id ? 'Edit' : 'Add' } Plant</button>
          <button className='btn--clear' type='reset'>Cancel</button>
        </div>
      </form>
    )
  }
}

export default withRouter(connect(null, { postPlant, editPlant })(NewForm))
