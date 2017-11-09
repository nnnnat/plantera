import React from 'react'
import { Link } from 'react-router-dom'

const Logo = (props) => (
  <Link to='/' className='logo h1 tx--reset' style={{ border: 'none' }}>
    <svg className='icon icon-logo tx--primary' style={{ fill: 'currentColor' }}>
      <use xlinkHref='#icon-logo' />
    </svg>
  </Link>
)

export default Logo
