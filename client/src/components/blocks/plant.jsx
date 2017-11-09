import React from 'react'
// components
import WateredBtn from './../elements/wateredBtn'

export const Plant = ({ plant }) => {
  return (
    <div className='plant bdr--b bdr--gray1 gp pd0--y'>
      <h3 className='h4 tx--reset'>{ plant.name }</h3>
      <div>
        <WateredBtn plant={ plant } />
        <button className='btn--clear'>Edit</button>
      </div>
    </div>
  )
}
