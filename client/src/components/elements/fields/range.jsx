import React from 'react'

export default ({ label, name, value, onChange }) => (
  <label className='mg4--b'>
    <b>{ label }</b>
    <input type='range' name={name} value={value} onChange={({ target }) => onChange(target.name, target.value)} min='1' max='31' />
    <small>{ value } days</small>
  </label>
)
