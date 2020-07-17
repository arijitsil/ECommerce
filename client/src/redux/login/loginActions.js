import loginType from './loginTypes'



const loginClick = () => {
    return {
        type : loginType.LOGIN_CLICK
    }
}

const isLogin = () => {
    return {
        type : loginType.IS_LOGGED_IN
    }
}

const login = user => {
    return {
      type: loginType.IS_LOGGED_IN,
      payload: user
    };
  };

const isLogOut = () => {
    return {
        type : loginType.IS_LOGGED_OUT
    }
}

const checkJWTToken = (currentuser) => {
    return {
        type : loginType.HAS_JWT_TOKEN,
        user : currentuser
    }
}

const resetToken = () => {
    return {
        type:loginType.RESET_TOKEN
    }
}

const logout = () => {
    return {
        type:loginType.LOG_OUT,
    }
}

const actions = {
    loginClick,
    isLogin,
    isLogOut,
    checkJWTToken,
    resetToken,
    login,
    logout
 }

 export default actions

