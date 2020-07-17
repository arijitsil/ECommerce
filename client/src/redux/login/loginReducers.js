import loginType from './loginTypes'

const initialState = {
    user : null,
    loginDisplay : false,
    isLoggedIn : false,
    hasJWTToken : false,
    isAuthUser : false
}

const loginReducer = (state=initialState,action) => {
    switch(action.type){
        case loginType.LOGIN_CLICK :
        return{
            ...state,
            loginDisplay : !state.loginDisplay
        }

        case loginType.IS_LOGGED_IN : return{
            ...state,
            isAuthUser : true,
            user : action.user
        }

        case loginType.IS_LOGGED_OUT : return{
            ...state,
            isLoggedIn: false
        }

        case loginType.HAS_JWT_TOKEN : return{
            ...state,
            hasJWTToken : !state.hasJWTToken,
            user : action.user
        }

        case loginType.RESET_TOKEN : return{
            ...state,
            hasJWTToken : false,
            user : null
        }

        case loginType.LOG_OUT : return {
            ...state,
            isAuthUser: false,
            isLoggedIn: false,
            user : null
        }
        default: return state
    }
}

export default loginReducer
