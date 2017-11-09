import React from 'react'
import { Link, withRouter } from 'react-router-dom'
// compoents
import Logo from './../elements/logo'
import AddBtn from './../elements/addBtn'

const Header = ({ location: { pathname }}) => (
  <header className='bdr--b bdr--gray1'>
    <div className='cn2 gp'>
      <h1 className='h2 tx--primary tx--reset'>Plantera</h1>
      <div className='gp--end' style={{ width: 'auto' }}>
        { (pathname === '/') ? <AddBtn /> : '' }
        <Logo />
      </div>
    </div>
  </header>
)

export default withRouter(Header)
