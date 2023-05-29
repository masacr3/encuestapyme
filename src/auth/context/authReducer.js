//iniciar sesión, cerrar sesión, no estan implementadas(registrar un usuario, gestionar tokens de autenticación)

export const authReducer = (state = {}, action) => {
    switch (action.type){
        case '[Auth] Login':
            return {
                ...state,
                logged: true,
                user: action.payload
            };
        
        case '[Auth] Logout':
            return{
                ...state,
                logged: true,
                user: action.payload
            };
        
        default:
            return state
    }
}
