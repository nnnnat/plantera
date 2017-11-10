import React from 'react'
import { Link } from 'react-router-dom'
// components
import Notice from './notice'

const Logo = ({ count }) => (
  <Link to='/' className='logo h1 tx--reset' style={{ border: 'none', position: 'relative' }}>
    { (count > 0) ? <Notice count={count} /> : '' }
    <svg className='icon icon-logo tx--primary' style={{ fill: 'currentColor' }}>
      <use xlinkHref='#icon-logo' />
    </svg>
  </Link>
)

export default Logo
