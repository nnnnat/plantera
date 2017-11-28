import React from 'react'
// components
import SectionTitle from './../blocks/sectionTitle'
import Form from './../partials/form'

export default ({ plant }) => (
  <section className='form bg--gray0'>
    <SectionTitle title={(plant) ? 'Edit Plant' : 'Add Plant'} />
    <div className=''>
      <Form edit={plant} />
    </div>
  </section>
)
