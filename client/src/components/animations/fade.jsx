import React from 'react'
import { Transition } from 'react-transition-group'
// scripts
import * as motion from './../../scripts/motion'
// styles
const styles = {
  display: 'inherit',
  opacity: 0,
  transition: `opacity ${motion.fast}ms ${motion.ease}`
}

const statusStyles = {
  entering: { opacity: 0 },
  entered: { opacity: 1 }
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
