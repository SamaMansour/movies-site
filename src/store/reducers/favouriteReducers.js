import * as types from "../actions/types"
const initialState = {
    favourites: []
};

export const addFavouriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_FAVOURITES:
      return {
        favourites: action.payload
      }
    case types.ADD_FAVOURITE:
      return action.payload
      
    default:
      return state
  }
};

export default addFavouriteReducer;


