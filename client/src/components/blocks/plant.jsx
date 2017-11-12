import React from 'react'
// components
import WateredBtn from './../elements/wateredBtn'

export const Plant = ({ plant, type }) => {
  const thirsty = (type === 'thirsty')
  const alert = <svg className='icon tx--alert mg1--r' style={{ fill: 'currentColor' }}><use xlinkHref='#icon-alert' /></svg>

  return (
    <div className='plant bdr--b bdr--gray1 gp pd2'>
      <h3 className='h4 gp tx--reset'>
        { thirsty ? alert : '' }
        { plant.name }
      </h3>
      <div className='gp'>
        { thirsty ? <WateredBtn plant={plant} /> : '' }
        <button className='btn--clear'>Edit</button>
      </div>
    </div>
  )
}
