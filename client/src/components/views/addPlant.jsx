import React from 'react'
// components
import PageTitle from './../elements/pageTitle'
import NewForm from './../blocks/newForm'

const css = {
  minHeight: 'calc(100vh - 105px)'
}

const AddPlant = () => (
  <section className='form bg--gray0' style={css}>
    <PageTitle title='Add Plant' />
    <div className='cn2 pd2--x mg--auto'>
      <NewForm />
    </div>
  </section>
)

export default AddPlant
