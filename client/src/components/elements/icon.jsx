import React from 'react'

const Icon = ({ svg, color, helper }) => (
  <svg className={`icon ${color ? `tx--${color}` : ''} ${helper}`}>
    <use xlinkHref={`#icon-${svg}`} />
  </svg>
)

export default Icon
