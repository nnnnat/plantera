import React from 'react'

const TextField = (field) => (
  <label>
    { field.label }
    <input type='text' { ...field.input } />
    <small className='tx--error'>{ field.meta.touched ? field.meta.error : '' }</small>
  </label>
)

export default TextField
