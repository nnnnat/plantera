import React from 'react'
import { Link } from 'react-router-dom'
// components
import Icon from './../elements/icon'
import WateredBtn from './../elements/buttons/watered'

export const Plant = ({ plant, thirsty }) => {
  return (
    <div className='plant bdr--b bdr--gray1 gp pd2'>
      <h3 className='h4 gp tx--reset'>
        { thirsty ? <Icon svg='alert' color='alert' helper='mg2--r' /> : '' }
        { plant.name }
      </h3>
      <div className='gp'>
        { thirsty ? <WateredBtn plant={plant} /> : '' }
        <Link to={{ pathname: '/edit-plant', state: plant }} className='btn--clear'>Edit</Link>
      </div>
    </div>
  )
}
