// import React, { useContext } from 'react';
// import { Route, useNavigate } from 'react-router-dom';
// import { AuthContext } from './context/AuthContext';

// const PrivateRoute = ({ path, requiredRole, ...props }) => {
//   const navigate = useNavigate()
//   const { isAuthenticated, loading, state } = useContext(AuthContext);
//   const { user } = state
//   if (!isAuthenticated || (requiredRole && user.length > 0 && user[0].role !== requiredRole)) {

//     return navigate("/login")
//   }

//   return <Route path={path} {...props} />;
// };

// export default PrivateRoute;




