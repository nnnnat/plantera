import React from 'react'
import { Link } from 'react-router-dom'
// components
import AddIcon from './../icons/addIcon'

const AddBtn = (props) => (
  <Link to='/add-plant' className='btn btn--primary pd0' style={{ borderRadius: '.25rem' }}>
    <span className='sr'>
      Add new plant
    </span>
    <AddIcon />
  </Link>
)

export default AddBtn
