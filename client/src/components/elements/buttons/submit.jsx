import React from 'react'

export default ({ id }) => (
  <button className='btn--primary btn--success' type='submit'>
    { id ? 'Update' : 'Add' } Plant
  </button>
)
