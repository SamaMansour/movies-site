import {
	APPLY_FILTERS_SUCCESS, 
	APPLY_FILTERS_FAIL } 
	from '../actions/types';

export const applyFilterReducer = (state = {}, action) => {
	switch (action.type) {
	case APPLY_FILTERS_SUCCESS:
		return {filters: action.payload};
	case APPLY_FILTERS_FAIL:
		return action.payload;
	default:
		return state;
	}
};

export default applyFilterReducer;
