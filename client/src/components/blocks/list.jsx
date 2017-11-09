import React from 'react'
import _ from 'lodash'
// components
import { Plant } from './plant'

const List = ({ plants }) => (
  <section className='cn2'>
    { _.map(plants, plant => <Plant key={ plant._id }  plant={ plant } />) }
  </section>
)

export default List
