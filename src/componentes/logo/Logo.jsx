import './Logo.css'
import logoempresa from '../assets/logo.png'

function Logo() {
  return (
    <div className="container flex col align-center padding-h">
        <img src={logoempresa} alt="" className='logo-img'/>
    </div>
  )
}

export default Logo