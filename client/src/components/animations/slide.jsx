import React from 'react'
// components
import Motion from './motion'

export default ({ children, ...props }) => (
  <Motion type='slide' {...props}>
    {children}
  </Motion>
)
