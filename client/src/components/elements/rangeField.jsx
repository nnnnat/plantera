import React from 'react'

const RangeField = (field) => (
  <label>
    { field.label }
    <input type='range' min='1' max='31' { ...field.input }/>
    <small>{ field.input.value } days</small>
  </label>
)

export default RangeField
