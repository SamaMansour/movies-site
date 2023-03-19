import { useAuth } from './useAuth';
import { useLocation } from "react-router-dom"

export default function PrivateRoute({ children }) {
  const location = useLocation();
  const auth = useAuth();

  if (auth === undefined) return null; // or loading spinner/etc...

  return auth
    ? children
    : <Navigate to="/login" replace state={{ from: location }} />;
}