import React from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
// compoents
import Logo from './../elements/logo'
import AddBtn from './../elements/addBtn'

const Header = ({ notice, location: { pathname }}) => (
  <header className='bdr--b bdr--gray1'>
    <div className='cn2 gp'>
      <h1 className='h2 tx--primary tx--reset'>Plantera</h1>
      <div className='gp--end' style={{ width: 'auto' }}>
        { (pathname === '/') ? <AddBtn /> : '' }
        <Logo count={ notice } />
      </div>
    </div>
  </header>
)

const mapStateToProps = (state) => ({ notice: state.notice})

export default withRouter(connect(mapStateToProps)(Header))
