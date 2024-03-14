import React, { useEffect, useReducer, useState } from 'react';
import Reducer from './reducer';
import axios from 'axios';

const initialState = {
  isLoggedIn: false,
  user: null,
  token: null,
  orders: [],
  backendError: null,
};

export const AuthContext = React.createContext();
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [state, dispatch] = useReducer(Reducer, initialState);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const bearerToken = localStorage.getItem("token");
        const headers = {
          Authorization: `Bearer ${bearerToken}`,
        };
         const userDataResponse = await axios.get(
          "http://localhost:8000/api/auth/users",
          { headers: headers }
        ); 
        const userOrdersResponse = await axios.get(
          "http://localhost:8000/api/orders/user-orders",
          { headers: headers }
        );

        dispatch({ type: "LOGIN_SUCCESS", payload: bearerToken });
        dispatch({ type: "SET_USER", payload: userDataResponse.data.customer });
        dispatch({ type: "SET_ORDERS", payload: userOrdersResponse.data });
        // dispatch({ type: "SET_LOADING", payload: false });
      } catch (error) {
        dispatch({ type: "SET_LOADING", payload: false });
        if (error.response && error.response.status === 500) {
          dispatch({ type: "SET_BACKEND_ERROR", payload: false });
        } else {
          dispatch({ type: "SET_BACKEND_ERROR", payload: false});
        }
      }
    };
    fetchData();
  }, []);

  return (
    <AuthContext.Provider value={{ state, dispatch, isAuthenticated, setIsAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};
