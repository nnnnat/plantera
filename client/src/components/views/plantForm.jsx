import React from 'react'
// components
import PageTitle from './../elements/pageTitle'
import Form from './../blocks/form'

const PlantForm = ({ plant }) => (
  <section className='form bg--gray0 bdr--t bdr--success'>
    <PageTitle title={(plant) ? 'Edit Plant' : 'Add Plant'} />
    <div className='cn2 mg--auto'>
      <Form edit={plant} />
    </div>
  </section>
)

export default PlantForm
