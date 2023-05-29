import { useReducer } from "react";
import { AuthContext } from "./AuthContext";
import {authReducer} from "./authReducer";

// const initialState = {
//     logged: false,
//     user: 'lucas'
// }
// estado inicial de mi funcion (esta personalizado para que si el usuario no hizo logout el usuario al entrar siga activo)
const init = () => {
    const user = JSON.parse( localStorage.getItem('user') );
  
    return {
      logged: !!user,
      user: user,
    }
  }

export const AuthProvider = ({children}) => {
    const [authState, dispatch] = useReducer(authReducer, {}, init);

    const login = (name = '') => {
        const user = {id: 'abc', name}
        const action = {type:'[Auth] Login', payload: user}
        localStorage.setItem('user', JSON.stringify(user));
        dispatch(action);
    }
    const logout = () => {
        localStorage.removeItem('user');
        const action = {type: '[Auth] Logout'};
        dispatch(action);
    }
  return (
    <AuthContext.Provider value={{
        ...authState,

        //metodos
        login,
        logout,
    }}>
        {children}
    </AuthContext.Provider>
  );
}
