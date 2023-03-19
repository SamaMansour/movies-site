
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
  const userId = getState().auth._id
  const favourites = await axios.get(`/favourites/${userId}`, setHeaders())

  if (favourites.data) {
    dispatch({
      type: types.FETCH_FAVOURITES,
      payload: {
        favourites: favourites.data
      }
    })

  }
}

export const addFavourite = favourite => async (dispatch, getState) => {
  const userId = getState().auth._id
  await axios.post("/favourites", { ...favourite, userId }, setHeaders())

  dispatch({
    type: types.ADD_FAVOURITE
  })

  dispatch(loadFavourites())
}