import {
	ADD_FAVOURITE_REQUEST,
	ADD_FAVOURITE_SUCCESS,
	ADD_FAVOURITE_FAIL,
	REMOVE_FAVOURITE_REQUEST,
	REMOVE_FAVOURITE_SUCCESS,
	REMOVE_FAVOURITE_FAIL
} from "../actions/types";


export const addFavourite = (state = {}, action) => {
    switch (action.type) {
        case ADD_FAVOURITE_REQUEST:
            return { loading: true };
        case ADD_FAVOURITE_SUCCESS:
            return { loading: false, success: true };
        case ADD_FAVOURITE_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
}


export const removeFavourite = (state = {}, action) => {
    switch (action.type) {
        case REMOVE_FAVOURITE_REQUEST:
            return { loading: true };
        case REMOVE_FAVOURITE_SUCCESS:
            return { loading: false, success: true };
        case REMOVE_FAVOURITE_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
}