import React from 'react'
import { withRouter } from 'react-router-dom'
// compoents
import Logo from './../blocks/logo'
import AddBtn from './../elements/buttons/add'

const Header = ({ location: { pathname } }) => (
  <header className='pd0'>
    <div className='cn2 mg--auto gp'>
      <h1 className='h2 tx--primary tx--reset'>Plantera</h1>
      <div className='gp--right' style={{ width: 'auto' }}>
        { (pathname !== '/add-plant') ? <AddBtn /> : '' }
        <Logo />
      </div>
    </div>
  </header>
)

export default withRouter(Header)
