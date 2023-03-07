
import { 
ADD_FAVOURITE_REQUEST,
REMOVE_FAVOURITE_REQUEST
};

export const addFavourite = (id) => {
  dispatch({
    type: ADD_FAVOURITE_REQUEST,
    payload: {
      id
    }
  })
}

export const removeFavourite = (id)=>{
	type : REMOVE_FAVOURITE_REQUEST,
	payload:{ 
    id
  }
}