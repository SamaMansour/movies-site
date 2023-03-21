import * as types from "../actions/types"
import jwtDecode from "jwt-decode"
import Cookies from 'js-cookie';

const initialState = {
  token: Cookies.get("token"),
  name: null,
  email: null,
  _id: null
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SIGN_IN:
    //case types.SIGN_UP:
      const user = jwtDecode(action.payload)

      return {
        ...state,
        token: action.payload,
        email: user.email,
        _id: user._id
      }

    

    default:
      return state
  }
}

export default authReducer