import React from 'react'

const TextField = ({ label, name, value, onChange }) => (
  <label>
    { label }
    <input type='text' name={name} value={value} onChange={({ target }) => onChange(target.name, target.value)} />
  </label>
)

export default TextField
