import React from 'react'
import { Link } from 'react-router-dom'

const AddBtn = (props) => (
  <Link to='/add-plant' className='btn btn--primary pd0' style={{ borderRadius: '.25rem' }}>
    <span className='sr'>
      Add new plant
    </span>
    <svg className='icon icon-add'>
      <use xlinkHref='#icon-add' />
    </svg>
  </Link>
)

export default AddBtn
