import React from 'react'

const PageTitle = ({ title, bg }) => (
  <div className={`${bg || ''} tx--secondary`}>
    <div className='cn2 pd2 mg--auto'>
      <h2 className='h5 tx--reset tx--uppercase'>
        { title }
      </h2>
    </div>
  </div>
)

export default PageTitle
