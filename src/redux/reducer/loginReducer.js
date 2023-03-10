const initialState = {
    isLoggedIn: false,
    loginData:[]
  }

export const loginReducer = (state = initialState, action) => {
    console.log('action',action)
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            return { ...state, loginData: action.data,isLoggedIn:true }
        case 'LOGIN_ERROR':
            return { ...state }
            case 'LOGOUT_SUCCESS':
                return { ...state, loginData: action.data,isLoggedIn:false }
        default:
            return state
    }
}