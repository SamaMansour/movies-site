import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import useAuth from './useAuth';
import Cookies from "js-cookie";




export default function PrivateRoute({ children }) {
   const location = useLocation()
  
   
    
    if (Cookies.get("token")== null) {
        // not logged in so redirect to login page with the return url
        return <Navigate to="/login" replace state={{ from: location }} />;
    }
   

    // authorized so return child components
    return children;
}


