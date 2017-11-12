import React from 'react'
// components
import Title from './../elements/title'
import Form from './../blocks/form'

const css = {
  minHeight: 'calc(100vh - 105px)'
}

const AddPlant = () => (
  <section className='form bg--gray0' style={css}>
    <Title title='Add Plant' />
    <div className='cn2 pd2--x mg--auto'>
      <Form />
    </div>
  </section>
)

export default AddPlant
