import React from 'react'
import { Link } from 'react-router-dom'
// components
import Pop from './../../animations/pop'
import Icon from './../icon'

const css = {
  borderRadius: '.25rem',
  padding: '.25rem'
}

export default () => (
  <Pop appear in>
    <Link to='/add-plant' className='btn btn--primary' style={css}>
      <span className='sr'>
        Add new plant
      </span>
      <Icon svg='add' />
    </Link>
  </Pop>
)
