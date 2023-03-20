import useAuth from './useAuth';
import { useLocation, Navigate } from "react-router-dom"

export default function PrivateRoute({ children }) {
  const location = useLocation();
  const auth = useAuth();

  if (auth === true) return null;

  return auth
    ? children
    : <Navigate to="/login" replace state={{ from: location }} />;
}