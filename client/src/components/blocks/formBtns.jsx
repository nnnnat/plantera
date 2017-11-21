import React from 'react'
// components
import SubmitBtn from './../elements/buttons/submit'
import CancelBtn from './../elements/buttons/cancel'
import DeleteBtn from './../elements/buttons/delete'

export default ({ id }) => (
  <div className='bg--white'>
    <div className='cn2 gp mg--auto pd2--x'>
      <div className='gp--left pd2--y'>
        <SubmitBtn id={id} />
        <CancelBtn />
      </div>
      { id ? <DeleteBtn id={id} /> : '' }
    </div>
  </div>
)
