import {Container, Img} from './Logo.module.css'
import logoempresa from '../assets/logo.png'

function Logo() {
  return (
    <div className={Container}>
        <img src={logoempresa} alt="" className={Img}/>
    </div>
  )
}

export default Logo