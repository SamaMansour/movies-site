import axios from "axios";
import React, { useState, useEffect} from "react";
import Cookies from "js-cookie";
export default function useAuth() {
  const [loggedIn, setLoggedIn] = useState(null); 

  useEffect(() => {
    const token = Cookies.get("token");
     if (token != null){
        setLoggedIn(true);
     }
     else{
      
        setLoggedIn(false);
      }
     
  return loggedIn;
});
};