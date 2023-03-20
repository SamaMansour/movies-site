import axios from "axios";
import React, { useState, useEffect} from "react";
import Cookies from "js-cookie";
import { useSelector } from "react-redux";
export default function useAuth() {
  const [loggedIn, setLoggedIn] = useState(null); 

//   useEffect(() => {
//     const token = Cookies.get("token");
//       if (token != undefined){
//         setLoggedIn(result.status === 200);
//       } else
//       {
//         console.error(error)
//         setLoggedIn(false);
//       }

//   return loggedIn;
// });

  const { user: authUser } = useSelector(x => x.auth);
}