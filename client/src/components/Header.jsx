import React from 'react'

export const Header = () => (
  <header className='bdr--b bdr--gray1'>
    <div className='cn cn2 gp'>
      <h2 className='tx--primary tx--reset'>Plantera</h2>

      <div>
        <button className='btn btn--primary pd0'>
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
