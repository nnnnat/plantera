import React from 'react'

const Title = ({ title, bg }) => (
  <div className={`${bg || ''} tx--primary pd2`}>
    <div className='cn2 mg--auto'>
      <h2 className='h5 tx--reset tx--uppercase'>
        { title }
      </h2>
    </div>
  </div>
)

export default Title
