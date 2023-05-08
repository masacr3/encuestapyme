import { Container } from './Modal.module.css'

// eslint-disable-next-line react/prop-types
function Modal({children}) {
  return (
    <div className={Container}>
        {children}
    </div>
  )
}

export default Modal