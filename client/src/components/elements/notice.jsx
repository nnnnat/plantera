import React from 'react'

const css = {
  borderRadius: '50%',
  fontSize: '1rem',
  lineHeight: '.75',
  position: 'absolute',
  right: '0',
  top: '0'
}

const Notice = ({ count }) => (
  <span className='notice bg--error tx--white pd0' style={css}>
    { count }
  </span>
)

export default Notice
