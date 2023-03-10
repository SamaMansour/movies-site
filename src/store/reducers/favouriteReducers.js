import {
	ADD_FAVOURITE_SUCCESS,
	ADD_FAVOURITE_FAIL,

} from '../actions/types';


export const addFavouriteReducer = (state = '', action) => {
	switch (action.type) {
	case ADD_FAVOURITE_SUCCESS:
		return action.payload;
	case ADD_FAVOURITE_FAIL:
		return action.payload;
	default:
		return state;
	}
};

export default addFavouriteReducer;



