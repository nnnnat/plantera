import React from 'react'
import { connect } from 'react-redux'

// components
import Pop from './../animations/pop'

const css = {
  borderRadius: '50%',
  fontSize: '1rem',
  lineHeight: '.75',
  position: 'absolute',
  right: '0',
  top: '0'
}

export default connect(({ notice }) => ({ notice }))(({ notice }) => {
  if (!notice) return ''
  return (
    <Pop appear in={(notice > 0)}>
      <span className='bg--error tx--white pd0' style={css}>
        { notice }
      </span>
    </Pop>
  )
})
