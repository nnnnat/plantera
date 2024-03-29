import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
// scripts
import { postPlant, editPlant } from './../../scripts/actions'
import { nextDate } from './../../scripts/dates'
// components
import TextField from './../elements/fields/text'
import RangeField from './../elements/fields/range'
import FormBtns from './../blocks/formBtns'

class Form extends Component {
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
    const plant = { name, species, waterInt }

    if (_id) { 
      editPlant({ ...plant, _id }, () => history.push('/'))
    } else {
      postPlant({ ...plant, nextWater: nextDate(waterInt) }, () => history.push('/'))
    }
  }

  render () {
    const { name, species, waterInt, _id } = this.state
    return (
      <form className='bg--gray0' onSubmit={this.onSubmit}>
        <div className='cn2 mg--auto pd2--x'>
          <TextField label='Nickname' name='name' value={name} onChange={this.onChange} />
          <TextField label='Species' name='species' value={species} onChange={this.onChange} />
          <RangeField label='Watering Interval' name='waterInt' value={waterInt} onChange={this.onChange} />
        </div>
        <FormBtns id={_id} />
      </form>
    )
  }
}

export default withRouter(connect(null, { postPlant, editPlant })(Form))
