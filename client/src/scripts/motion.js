// settings
export const fast = 250
export const slow = 500
export const ease = 'cubic-bezier(0.4, 0.0, 0.2, 1)'

// helper functions
export const fastStagger = (delay = null) => ((delay) ? fast * (delay + 1) : fast)
export const slowStagger = (delay = null) => ((delay) ? slow * (delay + 1) : slow)


// css transitions
export const styles = {
  appear: {
    css:  {
      opacity: 0,
      transition: `all ${slow}ms ${ease}`
    },
    cssState: {
      entering: { opacity: 0, transform: 'scale(.98, .98) translateY(2vh)' },
      entered: { opacity: 1, transform: 'scale(1, 1) translateY(0vh)' },
      exiting: { opacity: 0, transform: 'scale(.98, .98) translateY(2vh)' },
      exited: { opacity: 0, transform: 'scale(.98, .98) translateY(2vh)' }
    }
  },
  fade: {
    css: {
      opacity: 0,
      transition: `opacity ${fast}ms ${ease}`
    },
    cssState: {
      entering: { opacity: 0 },
      entered: { opacity: 1 }
    }
  },
  pop: {
    css:  {
      opacity: 0,
      transition: `all ${fast}ms ${ease}`
    },
    cssState: {
      entering: { opacity: 0, transform: 'scale(0, 0)' },
      entered: { opacity: 1, transform: 'scale(1, 1)' },
      exiting: { opacity: 0, transform: 'scale(0, 0)' },
      exited: { opacity: 0, transform: 'scale(0, 0)' }
    }
  },
  slide: {
    css:  {
      height: 'auto',
      maxHeight: '0',
      opacity: 0,
      overflow: 'hidden',
      transition: `all ${slow}ms ${ease}`
    },
    cssState:  {
      entering: { opacity: 0, transform: 'translateX(2vw)' },
      entered: { maxHeight: '5rem', opacity: 1, transform: 'translateX(0vw)' },
      exiting: { opacity: 0, transform: 'translateX(-2vw)' },
      exited: { opacity: 0, transform: 'translateX(-2vw)' }
    }
  }
}
