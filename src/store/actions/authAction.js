import axios from "axios";
import * as types from "./types"


export const signUp = (username, password) => async dispatch => {
  try {
    const token = await axios.post("http://localhost:1337/auth/signup", { "email": username, "password": password })

    localStorage.setItem("token", token)


    let data = {};


    dispatch({
      type: types.SIGN_UP,
      payload: token
    })

    console.log("sent")
  } catch (error) {
    console.log(error)
    console.log("fail");
  }
}

export const signIn = ({username, password}) => async dispatch => {
  try {
    const token = await axios.post("http://localhost:1337/auth/login", {"email": username, "password": password})

    localStorage.setItem("token", token)

    dispatch({
      type: types.SIGN_IN,
      payload: token
    })
  } catch (error) {
    console.log(error)
  }
}



