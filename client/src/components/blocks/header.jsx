import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
// compoents
import Logo from './../elements/logo'
import AddBtn from './../elements/buttons/add'

const Header = ({ notice, location: { pathname } }) => (
  <header className='bdr--b bdr--gray1 pd0'>
    <div className='cn2 mg--auto gp'>
      <h1 className='h2 tx--primary tx--reset'>Plantera</h1>
      <div className='gp--right' style={{ width: 'auto' }}>
        { (pathname !== '/add-plant') ? <AddBtn /> : '' }
        <Logo count={notice} />
      </div>
    </div>
  </header>
)

const mapStateToProps = (state) => ({ notice: state.notice })

export default withRouter(connect(mapStateToProps)(Header))
