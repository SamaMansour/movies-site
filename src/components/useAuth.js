import axios from "axios";
import React, { useState} from "react";
import { Cookies } from "js-cookie";
export default function useAuth() {
  const [loggedIn, setLoggedIn] = useState(); // <-- undefined

  useEffect(() => {
    const token = Cookies.get("token");
    axios
      .get(`${process.env.REACT_APP_API}/auth`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((result) => {
        setLoggedIn(result.status === 200);
      })
      .catch((error) => {
        console.error(error)
        setLoggedIn(false);
      });
  }, []);

  return loggedIn;
}