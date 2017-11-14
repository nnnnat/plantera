import React from 'react'

const TextField = ({ label, name, value, onChange }) => (
  <label className='mg4--b'>
    <b>{ label }</b>
    <input type='text' name={name} value={value} onChange={({ target }) => onChange(target.name, target.value)} />
  </label>
)

export default TextField
