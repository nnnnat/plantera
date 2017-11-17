import React from 'react'

const SubmitBtn = ({ id }) => (
  <button className='btn--primary btn--success' type='submit'>
    { id ? 'Update' : 'Add' } Plant
  </button>
)

export default SubmitBtn
