import { Navigate } from 'react-router-dom';
import { isAuthenticated } from '../data/function';

const ProtectedRoute = ({ element }) => {
  if (isAuthenticated()) {
    return element;
  } else {
    return <Navigate to="/login" />;
  }
};

export default ProtectedRoute;
