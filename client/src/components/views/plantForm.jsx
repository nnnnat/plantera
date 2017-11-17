import React from 'react'
// components
import SectionTitle from './../blocks/sectionTitle'
import Form from './../partials/form'

const PlantForm = ({ plant }) => (
  <section className='form bg--gray0 bdr--t bdr--success'>
    <SectionTitle title={(plant) ? 'Edit Plant' : 'Add Plant'} />
    <div className=''>
      <Form edit={plant} />
    </div>
  </section>
)

export default PlantForm
