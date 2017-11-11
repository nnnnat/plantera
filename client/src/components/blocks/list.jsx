import React from 'react'
import _ from 'lodash'
// components
import { Plant } from './plant'

const List = ({ plants, type }) => (
  <div className='cn2' style={{ paddingBottom: '0', paddingTop: '0' }}>
    { _.map(plants, plant => <Plant key={plant._id} plant={plant} type={type} />) }
  </div>
)

export default List
