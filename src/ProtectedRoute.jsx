// ProtectedRoute.jsx
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ component: Component }) {
  const token = useSelector(state => state.auth.token);

  if (!token) {
    return <Navigate to="/login" replace />; // si pas de token redirection vers login
  }

  return <Component />;
}

export default ProtectedRoute;
