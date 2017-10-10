import React from 'react'

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
         { plants.map((plant) => <p key={plant.name}>{plant.name}</p>) }
       </section>
    </main>
  )
}
