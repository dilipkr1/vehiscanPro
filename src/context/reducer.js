const Reducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return { ...state, isLoggedIn: true, token: action.payload.token };
    case 'LOGOUT':
      localStorage.removeItem('token');
      return { ...state, isLoggedIn: false, token: null, user: null, orders: [] };
    case 'SET_USER':
      return { ...state, user: action.payload };
    case 'SET_ORDERS':
      return { ...state, Orders: action.payload.data };
    default:
      return state;
  }
};

export default Reducer;
