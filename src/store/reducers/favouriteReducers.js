import * as types from "../actions/types"
const initialState = {
    favourites: []
};

export const addFavouriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_FAVOURITES:
      return {
        ...state,
        favourites: action.payload.favourites
      }
    case types.ADD_FAVOURITE:
      return {
        ...state
      }
    default:
      return state
  }
};

export default addFavouriteReducer;


