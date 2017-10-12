import React from 'react'
import { Plant } from './Plant'

export const List = ({ plants }) => {
  return (
    <main>
      <div className='bg--gray1 pd0--y'>
        <div className='cn cn2'>
          <h5 className='tx--reset tx--primary tx--uppercase'>
            All Plants
          </h5>
        </div>
      </div>
       <section className='cn cn2'>
         { plants.map((plant, i) => <Plant key={ i }  plant={ plant } />) }
       </section>
    </main>
  )
}
