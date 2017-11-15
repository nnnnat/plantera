import React from 'react'
// components
import PageTitle from './../elements/pageTitle'
import Form from './../blocks/form'

const css = {
  minHeight: 'calc(100vh - 105px)'
}

const PlantForm = ({ plant }) => (
  <section className='form bdr--t bdr--success bg--gray0' style={css}>
    <PageTitle title={(plant) ? 'Edit Plant' : 'Add Plant'} />
    <div className='cn2 pd2--x mg--auto'>
      <Form edit={plant} />
    </div>
  </section>
)

export default PlantForm
