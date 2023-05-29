import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom';

export const LoginPage = () => {
    
    const {login} = useContext(AuthContext);
    const navigate = useNavigate();

    const onLogin = () => {
        const lastPath = localStorage.getItem('lastPath' || '/');
    

    login('lucas araujo');

    navigate(lastPath, {
    replace: true
    });
  }

  return (
    <div >
      <h1>Login</h1>
      <hr />

      <button 
        
        onClick={ onLogin }
      >
        Login
      </button>

    </div>
  )
}
