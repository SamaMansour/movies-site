import {
	ADD_FAVOURITE_REQUEST,
} from '../actions/types';


export const addRemoveFavourite = (state = [], action) => {
	switch (action.type) {
	case ADD_FAVOURITE_REQUEST:
		return [...state, action.payload];
	default:
		return state;
	}
};

export default addRemoveFavourite;



