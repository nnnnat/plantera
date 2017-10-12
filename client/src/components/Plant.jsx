import React from 'react'

export const Plant = ({ plant: { name } }) => {
  return (
    <div className='plant bdr--b bdr--gray1 gp pd0--y'>

      <h4 className='tx--reset'>{ name }</h4>

      <div>
        <button className='btn btn--clear'>Edit</button>
      </div>
    </div>
  )
}
