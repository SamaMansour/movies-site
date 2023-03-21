
// import { 
// 	ADD_FAVOURITE_SUCCESS,
// 	ADD_FAVOURITE_FAIL
// } from './types';

// export const addFavourite = (data, id) => {
//   const res = data.results.find(item => item.id === id)
//   return {
//     type: 'ADD_FAVOURITE_SUCCESS',
//     payload: res
//    }
	
// }


import axios from "axios"
import * as types from "./types"
import { setHeaders } from "../../utils"

export const loadFavourites = () => async (dispatch, getState) => {
  //const userId = getState().auth._id
  const userId = "6414363497c7296fc8418e70";
  const favourites = await axios.get(`http://localhost:1337/favourites/${userId}`, setHeaders())

  if (favourites.data) {
    dispatch({
      type: types.FETCH_FAVOURITES,
      payload:favourites.data
      
    })

  }
}

export const addFavourite =  (data, id) => async (dispatch, getState) => {
  const res = data.results.find(item => item.id === id);
  //const userId = getState().auth._id
  const userId = '6414363497c7296fc8418e70'

  await axios.post("http://localhost:1337/favourites", {"title": res.title, "overview": res.overview, "userId": userId }, setHeaders())

  dispatch({
    type: types.ADD_FAVOURITE
  })

  dispatch(loadFavourites())
}