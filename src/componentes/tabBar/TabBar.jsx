//TAB BAR
import './TabBar.css';
import { useState } from 'react';

//LOGOUT
import { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/context/AuthContext';




const TabBar = () => {

  //TabBar
    const [isOpen, setIsOpen] = useState(false);
    
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    //Logout
    const { user, logout } = useContext( AuthContext );
    

    const navigate = useNavigate();

    const onLogout = () => {
        logout();

        navigate('/login', {
            replace: true
        });

        
    }


  return (
  
          <div className="tab-bar">
            <button className="menu-toggle" onClick={toggleMenu}>
              <span className="menu-icon"></span>
            </button>
            <div className={`menu ${isOpen ? 'open' : ''}`}>
            
            <Link to="/home" className="tab">Home</Link>
            <Link to="/ingresos" className="tab">Ingresos</Link>
            <Link to="/egresos" className="tab">Egresos</Link>
            

            <div className='tab-user'>{ user?.name } </div>
            <button className= "tab" onClick={ onLogout }>
              <div className='logout'>
                  Logout 
              </div>
            </button>
            </div>
          </div>

    
  )
}

export default TabBar;
