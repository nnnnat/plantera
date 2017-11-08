import React from 'react'

export const Plant = ({ plant: { name } }) => {
  return (
    <div className='plant bdr--b bdr--gray1 gp pd0--y'>

      <h3 className='h4 tx--reset'>{ name }</h3>

      <div>
        <button className='btn--clear'>Edit</button>
      </div>
    </div>
  )
}
