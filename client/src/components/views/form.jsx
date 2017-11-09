import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
// scripts
//import { } from './../scripts/actions.js
// components
import Title from './../elements/title'

class Form extends Component {
  constructor (props) {
    super(props)
    this.state = {
      add: true,
      name: '',
      species: '',
      waterInt: 15,
      lastWatered: '',
      id: ''
    }
  }

  submit (e) {
    e.preventDefault()
    const { add, name, species, waterInt, lastWatered } = this.state
    const { addPlant, updatePlant } = this.props
    
    if (add) {
      addPlant({ name, species, waterInt })
    } else {
      console.log('edit')
    }
  }

  render () {
    const { add, name, species, waterInt } = this.state
    return (
      <section className='form bg--gray0'>
        <Title title='Add Plant' />
        <div className='cn2' style={{ paddingBottom: '0', paddingTop: '0' }}>
          <form onSubmit={ this.submit.bind(this) }>
            <label>
              Nickname
              <input
                 type='text'
                 value={ name }
                 onChange={ (e) => this.setState({ name: e.target.value }) } />
            </label>

            <label>
              Species
              <input
                 type='text'
                 value={ species }
                 onChange={ (e) => this.setState({ species: e.target.value }) } />
            </label>

            <label>
              Watering Interval
              <input
                 type='range'
                 min='0'
                 max='31'
                 value={ waterInt }
                 onChange={ (e) => this.setState({ waterInt: e.target.value }) } />
               <small>{ waterInt } days</small>
            </label>
            
            <div className='gp--start pd2--y'>
              <button className='btn--primary' type='submit'>Add Plant</button>
              <button className='btn--clear' type='reset'>Cancel</button>
            </div>
          </form>
        </div>
      </section>
    )
  }
}

export default Form
