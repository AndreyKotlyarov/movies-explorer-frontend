import { Navigate } from 'react-router-dom';

const ProtectedRouteElement = ({ isLoggedIn, children }) => {
  if (!isLoggedIn) {
    return <Navigate to='/' replace />;
  }

  return children;
};

export default ProtectedRouteElement;
