import React from 'react'
// components
import PageTitle from './../elements/pageTitle'
import NewForm from './../blocks/newForm'

const css = {
  minHeight: 'calc(100vh - 105px)'
}

const EditPlant = ({ plant }) => (
  <section className='form bg--gray0' style={css}>
    <PageTitle title='Edit Plant' />
    <div className='cn2 pd2--x mg--auto'>
      <NewForm edit={plant} />
    </div>
  </section>
)

export default EditPlant
