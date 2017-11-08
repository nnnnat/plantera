import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => (
  <header className='bdr--b bdr--gray1'>
    <div className='cn2 gp'>
      <h1 className='h2 tx--primary tx--reset'>Plantera</h1>
      <div>
        <Link to='/add-plant' className='btn btn--primary pd0'>
          <span className='sr'>
            Add new plant
          </span>
          <svg className='icon icon-add'>
            <use xlinkHref='#icon-add' />
          </svg>
        </Link>
      </div>
    </div>
  </header>
)

export default Header
