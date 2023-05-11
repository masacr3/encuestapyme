import './TabBar.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';




const TabBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

  return (
    <div className="tab-bar">
      <button className="menu-toggle" onClick={toggleMenu}>
        <span className="menu-icon"></span>
      </button>
      <div className={`menu ${isOpen ? 'open' : ''}`}>
      <Link to="/" className="tab">Home</Link>
      <Link to="/ingresos" className="tab">Ingresos</Link>
      <Link to="/egresos" className="tab">Egresos</Link>
      </div>
    </div>
  );
};

export default TabBar;