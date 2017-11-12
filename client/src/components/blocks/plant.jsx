import React from 'react'
import { Link } from 'react-router-dom'
// components
import WateredBtn from './../elements/wateredBtn'

export const Plant = ({ plant, type }) => {
  const thirsty = (type === 'thirsty')
  const alert = (<svg className='icon tx--alert mg1--r' style={{ fill: 'currentColor' }}><use xlinkHref='#icon-alert' /></svg>)

  return (
    <div className=''>
      <div className='plant bdr--b bdr--gray1 gp pd2'>
        <h3 className='h4 gp tx--reset'>
          { thirsty ? alert : '' }
          { plant.name }
        </h3>
        <div className='gp'>
          { thirsty ? <WateredBtn plant={plant} /> : '' }
          <Link to={{ pathname: '/edit-plant', state: plant }} className='btn--clear'>Edit</Link>
        </div>
      </div>
    </div>
  )
}
