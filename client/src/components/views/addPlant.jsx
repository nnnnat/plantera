import React from 'react'
// components
import Title from './../elements/title'
import Form from './../blocks/form'

const AddPlant = () => (
  <section className='form bg--gray0'>
    <Title title='Add Plant' />
    <div className='cn2' style={{ paddingBottom: '0', paddingTop: '0' }}>
      <Form />
    </div>
  </section>
)

export default AddPlant
