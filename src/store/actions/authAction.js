import axios from "axios";
import * as types from "./types"
import cookies from "react-cookies";


export const signUp = (username, password) => async dispatch => {
  try {
    const { data} = await axios.post("http://localhost:1337/auth/signup", { "email": username, "password": password })



    dispatch({
      type: types.SIGN_UP,
      payload: data
    })

    console.log("sent")
  } catch (error) {
    console.log(error)
    console.log("fail");
  }
}

export const signIn = (username, password) => async dispatch => {
  try {
    const token = await axios.post("http://localhost:1337/auth/login", {"email": username, "password": password})

    cookies.setItem("token", token)

    dispatch({
      type: types.SIGN_IN,
      payload: token
    })
  } catch (error) {
    console.log(error)
  }
}



