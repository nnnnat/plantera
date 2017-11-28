import React from 'react'
import { Transition } from 'react-transition-group'
// scripts
import { styles, fastStagger, slowStagger } from './../../scripts/motion'

export default ({ children, delay, slow, type, ...props }) => { 
  const timeout = (slow) ? slowStagger(delay) : fastStagger(delay)
  const { css } = styles[type]
  const { cssState } = styles[type]
  return (
    <Transition {...props} timeout={timeout}>
      {(state) => (
        <div style={{ ...css, ...cssState[state] }}>
          {children}
        </div>
      )}
    </Transition>
  )
}
