import React from 'react'

const RangeField = ({ label, name, value, onChange }) => (
  <label>
    { label }
    <input type='range' name={name} value={value} onChange={({ target }) => onChange(target.name, target.value)} min='1' max='31' />
    <small>{ value } days</small>
  </label>
)

export default RangeField
