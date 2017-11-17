import React from 'react'
import _ from 'lodash'
// components
import { Plant } from './../blocks/plant'

const List = ({ plants, thirsty }) => (
  <div className='cn2 mg--auto'>
    { _.map(plants, (plant, id) => <Plant key={id} plant={plant} thirsty={thirsty} />) }
  </div>
)

export default List
