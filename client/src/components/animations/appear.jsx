import React from 'react'
import { Transition } from 'react-transition-group'
// scripts
import * as motion from './../../scripts/motion'
// styles
const styles = {
  left: 0,
  opacity: 0,
  overflow: 'hidden',
  position: 'absolute',
  top: 0,
  transition: `all ${motion.fast}ms ${motion.ease}`,
  width: '100%'
}

const statusStyles = {
  entering: { opacity: 0, transform: 'scale(.98, .98) translateY(5vh)' },
  entered: { opacity: 1, transform: 'scale(1, 1) translateY(0vh)' },
  exiting: { opacity: 0, transform: 'scale(.98, .98) translateY(5vh)' },
  exited: { opacity: 0, transform: 'scale(.98, .98) translateY(5vh)' }
}

export default ({ children, delay, ...props }) => {

  return (
    <Transition {...props} timeout={motion.fast}>
      {(status) => (
        <div style={{ ...styles, ...statusStyles[status] }}>
          {children}
        </div>
      )}
    </Transition>
  )
}
