import React from 'react'
import _ from 'lodash'
// components
import { Plant } from './../blocks/plant'

const List = ({ plants, type }) => (
  <div className='cn2 mg--auto'>
    { _.map(plants, (plant, id) => <Plant key={id} plant={plant} type={type} />) }
  </div>
)

export default List
