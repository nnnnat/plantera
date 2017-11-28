import React from 'react'
// components
import Motion from './motion'

export default ({ children, ...props }) => (
  <Motion type='pop' {...props}>
    {children}
  </Motion>
)
