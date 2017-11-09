import React from 'react'

const Title = ({ title, bg }) => (
  <div className={ `${ bg ? bg : '' } pd0--y` }>
    <div className='cn2'>
      <h2 className='h5 tx--reset tx--primary tx--uppercase'>
        { title }
      </h2>
    </div>
  </div>
)

export default Title
