import React from 'react'
import { Link } from 'react-router-dom'
// components
import Icon from './../elements/icon'
import Notice from './../elements/notice'

const css = {
  border: 'none',
  position: 'relative'
}

const Logo = () => (
  <Link to='/' className='logo h1 tx--reset' style={css}>
    <Notice />
    <Icon svg='logo' color='primary' />
  </Link>
)

export default Logo
