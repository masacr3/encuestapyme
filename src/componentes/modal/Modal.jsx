import React from 'react'

function Modal({children}) {
  return (
    <div className='modal padding-h-16'>
        {children}
    </div>
  )
}

export default Modal