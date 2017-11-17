import React from 'react'
import { connect } from 'react-redux'

const css = {
  borderRadius: '50%',
  fontSize: '1rem',
  lineHeight: '.75',
  position: 'absolute',
  right: '0',
  top: '0'
}

const Notice = ({ count }) => {
  if (count === 0) return ''
  return (
    <span className='notice bg--error tx--white pd0' style={css}>
      { count }
    </span>
  )
}

export default connect(state => ({ count: state.notice }))(Notice)
