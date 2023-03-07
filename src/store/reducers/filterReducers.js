import {
	APPLY_FILTERS_REQUEST,
	APPLY_FILTERS_SUCCESS, 
	APPLY_FILTERS_FAIL } 
	from '../actions/types';

export const applySearchReducer = (state = {}, action) => {
	switch (action.type) {
	case APPLY_FILTERS_REQUEST:
		return { loading: true };
	case APPLY_FILTERS_SUCCESS:
		return { loading: false, success: true };
	case APPLY_FILTERS_FAIL:
		return { loading: false, error: action.payload };
	default:
		return state;
	}
};

export default applySearchReducer;
