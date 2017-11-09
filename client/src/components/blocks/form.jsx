import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
// scripts
import { postPlant } from './../../scripts/actions.js'
import { Dates } from './../../scripts/utils'
// components
import TextField from './../elements/textField'
import RangeField from './../elements/rangeField'

const dates = new Dates()

class Form extends Component {
  submit (vals) {
    const { postPlant, history } = this.props 
    const plant = { ...vals, nextWater: dates.nextDate(dates.now(), vals.waterInt) }
    postPlant(plant, () => history.push('/'))
  }

  render () {
    const { handleSubmit } = this.props
    return (
      <form onSubmit={ handleSubmit(this.submit.bind(this)) }>
        <Field label='Nickname' name='name'component={ TextField } />
        <Field label='Species' name='species' component={ TextField } />
        <Field
           label='Watering Interval'
           name='waterInt'
           format={ val => val ? val : 14 }
           parse={ val => parseInt(val) }
           component={ RangeField } />
        <div className='gp--start pd2--y'>
          <button className='btn--primary' type='submit'>Add Plant</button>
          <button className='btn--clear' type='reset'>Cancel</button>
        </div>
      </form>
    )
  }
}

const validate = (values) => {
  const err = {}
  if (!values.name) err.name = 'Please enter a Nickname for your plant' 
  if (!values.species) err.species = 'Please enter the plant species'
  return err
}

export default withRouter(reduxForm({ validate, form: 'AddForm' })(connect(null, { postPlant })(Form)))
