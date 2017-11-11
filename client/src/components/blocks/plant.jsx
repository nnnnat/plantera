import React from 'react'
// components
import WateredBtn from './../elements/wateredBtn'

export const Plant = ({ plant, type }) => {
  return (
    <div className='plant bdr--b bdr--gray1 gp pd0--y'>
      <h3 className='h4 tx--reset'>{ plant.name }</h3>
      <div>
        { type === 'thirsty' ? <WateredBtn plant={plant} /> : '' }
        <button className='btn--clear'>Edit</button>
      </div>
    </div>
  )
}
