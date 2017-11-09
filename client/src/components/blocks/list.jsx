import React from 'react'
import _ from 'lodash'
// components
import { Plant } from './plant'

const List = ({ plants }) => (
  <div className='cn2' style={{ paddingBottom: '0', paddingTop: '0' }}>
    { _.map(plants, plant => <Plant key={ plant._id }  plant={ plant } />) }
  </div>
)

export default List
