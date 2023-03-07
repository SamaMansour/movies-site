import {
	APPLY_SEARCH_REQUEST,
	APPLY_SEARCH_SUCCESS, 
	APPLY_SEARCH_FAIL } 
	from '../actions/types';

export const applySearchReducer = (state = {}, action) => {
	switch (action.type) {
	case APPLY_SEARCH_REQUEST:
		return { loading: true };
	case APPLY_SEARCH_SUCCESS:
		return { loading: false, success: true };
	case APPLY_SEARCH_FAIL:
		return { loading: false, error: action.payload };
	default:
		return state;
	}
};

export default applySearchReducer;
