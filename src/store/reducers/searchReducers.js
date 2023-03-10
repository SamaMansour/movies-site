import {
	APPLY_SEARCH_SUCCESS, 
	APPLY_SEARCH_FAIL } 
	from '../actions/types';

  let movies = { };

export const applySearchReducer = (state = {}, action) => {
	switch (action.type) {	
  	case APPLY_SEARCH_SUCCESS:
			return { movies: action.payload} ;
	case APPLY_SEARCH_FAIL:
			return { error: action.payload };
  	default:
  		return state;
	}
};

export default applySearchReducer;
