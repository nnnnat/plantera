import React from 'react'
import { Transition } from 'react-transition-group'
// scripts
import * as motion from './../../scripts/motion'
// styles
const styles = {
  height: 'auto',
  maxHeight: '0',
  opacity: 0,
  overflow: 'hidden',
  transition: `all ${motion.fast}ms ${motion.ease}`
}

const statusStyles = {
  entering: { opacity: 0, transform: 'translateX(100vw)' },
  entered: { maxHeight: '100%', opacity: 1, transform: 'translateX(0vw)' },
  exiting: { opacity: 0, transform: 'translateX(-100vw)' },
  exited: { opacity: 0, transform: 'translateX(-100vw)' }
}

export default ({ children, delay, ...props }) => {

  return (
    <Transition {...props} timeout={motion.slow}>
      {(status) => (
        <div style={{ ...styles, ...statusStyles[status] }}>
          {children}
        </div>
      )}
    </Transition>
  )
}
