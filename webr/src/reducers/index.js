const initialState = {
    loggedInUser: '',
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN':
        return { ...state, loggedInUser: action.payload };
      default:
        return state;
    }
  };
  
  export default rootReducer;
  