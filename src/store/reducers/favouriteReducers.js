import {
	ADD_FAVOURITE_SUCCESS,
	ADD_FAVOURITE_FAIL,

} from '../actions/types';

const initialState = {
    items: []
};

export const addFavouriteReducer = (state = initialState, action) => {
	switch (action.type) {
	case ADD_FAVOURITE_SUCCESS:
		return {
      items: action.payload
      }
	case ADD_FAVOURITE_FAIL:
		return action.payload;
	default:
		return state;
	}
};

export default addFavouriteReducer;



