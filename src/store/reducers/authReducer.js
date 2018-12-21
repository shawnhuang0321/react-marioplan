const initState = {
  authError: null,
}

const authReducer = (state = initState, action) => {
  switch(action.type) {
    case 'LOGIN_SUCCESS':
      console.log('Login success');
      return {
        ...state,
        authError: null,
      };
    case 'LOGIN_ERROR':
      console.log('Login failed');
      return {
        ...state,
        authError: 'Login failed'
      }
    case 'LOGOUT_SUCCESS':
      console.log('Log out success');
      return state;
    case 'SIGNUP_SUCCESS':
      console.log('signup success');
      return {
        ...state,
        authError: null,
      }
    case 'SIGNUP_ERROR':
      console.log('signup error');
      return {
        ...state,
        authError: action.error.message,
      }
    default:
      return state;
  }
}

export default authReducer;