import React from 'react'
import { Link } from 'react-router-dom'
// scripts
import { overdue } from './../../scripts/dates'
// components
import Icon from './../elements/icon'
import WateredBtn from './../elements/buttons/watered'

export default ({ plant, thirsty }) => {
  const late = overdue(plant.nextWater)

  return (
    <div className='plant pd2 bdr--b bdr--gray1'>
      <div className='cn2 gp mg--auto'>
        <h3 className='h4 gp tx--reset'>
          { thirsty ? <Icon svg='alert' color='alert' helper='mg2--r' /> : '' }
          { plant.name }
          {
            (thirsty && late > 0)
              ? <small className='tx--error mg2--l'>{late} day{late > 1 ? 's' : ''} late</small>
              : ''
          }
        </h3>
        <div className='gp'>
          { thirsty ? <WateredBtn plant={plant} /> : '' }
          <Link to={{ pathname: '/edit-plant', state: plant }} className='btn--clear'>Edit</Link>
        </div>
      </div>
    </div>
  )        
}
