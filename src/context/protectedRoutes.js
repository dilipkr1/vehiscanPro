import { Route, Navigate } from 'react-router-dom';

const ProtectedDashboard = () => {
  const isAuthenticated = true;

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return (
    <Route path="/dashboard">
      {/* Your dashboard routes */}
    </Route>
  );
};

export default ProtectedDashboard;
