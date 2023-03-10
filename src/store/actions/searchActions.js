import {
	APPLY_SEARCH_SUCCESS,
	APPLY_SEARCH_FAIL } from './types.js';
import axios from 'axios'; 

export const applySearch = (query) => async (dispatch) => {
	try {
    
		const decodedQuery = query.replace(' ', '+');
		const API_KEY = process.env.REACT_APP_API_KEY;
		const res = await axios.get (`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${decodedQuery}&page=1&include_adult=false`);
		const data = await res.data.results;
		console.log(data);
 
		return dispatch({
			
			payload: data,

		});
  
	} catch (error) {
		dispatch({
			type: APPLY_SEARCH_FAIL,
			payload:
        error.response && error.response.data.message
        	? error.response.data.message
        	: error.message,
		});
	} 
  
};
