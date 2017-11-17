import React from 'react'
import { Link } from 'react-router-dom'
// components
import Icon from './../icon'

const css = {
  borderRadius: '.25rem'
}

const AddBtn = (props) => (
  <Link to='/add-plant' className='btn btn--primary pd0' style={css}>
    <span className='sr'>
      Add new plant
    </span>
    <Icon svg='add' />
  </Link>
)

export default AddBtn
