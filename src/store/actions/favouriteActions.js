
import { 
ADD_FAVOURITE_REQUEST,
REMOVE_FAVOURITE_REQUEST
} from "./types"

export const addFavourite = (id) => async(dispatch) => {
  dispatch({
    type: ADD_FAVOURITE_REQUEST,
    payload: {
      id
    }
  })
};

