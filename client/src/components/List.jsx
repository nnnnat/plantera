import React from 'react'
import { Plant } from './Plant'

export const List = ({ plants }) => {
  return (
    <main>
      <div className='bg--gray1 pd0--y'>
        <div className='cn2'>
          <h2 className='h5 tx--reset tx--primary tx--uppercase'>
            All Plants
          </h2>
        </div>
      </div>
       <section className='cn2'>
         { plants.map((plant, i) => <Plant key={ i }  plant={ plant } />) }
       </section>
    </main>
  )
}
