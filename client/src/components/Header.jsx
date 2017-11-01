import React from 'react'

export const Header = () => (
  <header className='bdr--b bdr--gray1'>
    <div className='cn2 gp'>
      <h1 className='h2 tx--primary tx--reset'>Plantera</h1>

      <div>
        <button className='btn--primary pd0'>
          <span className='sr'>
            Add new plant
          </span>
          <svg className='icon icon-add'>
            <use xlinkHref='#icon-add' />
          </svg>
        </button>
      </div>
    </div>
  </header>
)
