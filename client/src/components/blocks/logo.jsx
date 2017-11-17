import React from 'react'
import { Link } from 'react-router-dom'
// components
import LogoIcon from './../elements/icons/logoIcon'
import Notice from './../elements/notice'

const Logo = ({ count }) => (
  <Link to='/' className='logo h1 tx--reset' style={{ border: 'none', position: 'relative' }}>
    { (count > 0) ? <Notice count={count} /> : '' }
    <LogoIcon />
  </Link>
)

export default Logo
