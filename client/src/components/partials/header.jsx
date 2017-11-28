import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
// scripts
import { ease, slow } from './../../scripts/motion'
// compoents
import Logo from './../blocks/logo'
import AddBtn from './../elements/buttons/add'

const css = {
  transition: `border ${slow}ms ${ease} ${slow}ms`
}

const Header = ({ location: { pathname }, notice }) => {
  const bdr = (pathname === '/') ? (notice) ? 'alert' : 'gray1' : 'success'
  
  return (
    <header className={`pd0 bdr--b bdr--${bdr}`} style={css}>
      <div className='cn2 mg--auto gp'>
        <h1 className='h2 tx--primary tx--reset'>Plantera</h1>
        <div className='gp--right' style={{ width: 'auto' }}>
          { (pathname !== '/add-plant') ? <AddBtn /> : '' }
          <Logo />
        </div>
      </div>
    </header>
  )
}

export default withRouter(connect(({ notice }) => ({ notice }))(Header))
