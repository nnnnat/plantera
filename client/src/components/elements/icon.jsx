import React from 'react'

export default ({ svg, color, helper }) => (
  <svg className={`icon ${color ? `tx--${color}` : ''} ${helper}`}>
    <use xlinkHref={`#icon-${svg}`} />
  </svg>
)
