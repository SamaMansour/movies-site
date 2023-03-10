import {
	APPLY_FILTERS_SUCCESS,
	APPLY_FILTERS_FAIL } from './types.js';
import axios from 'axios'; 

export const applyFilters = (dateTo, dateFrom, genreId, sliderValue, page) => async (dispatch) => {
	try {
		const API_KEY = process.env.REACT_APP_API_KEY;
		const res = await axios.get (`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&page=${page}&release_date.lte=${dateTo}&release_date.gte=${dateFrom}&with_genres=${genreId}&vote_average.gte=${sliderValue}`);
		const data = await res.data.results;
		console.log(data);
  
		return dispatch({
			type: APPLY_FILTERS_SUCCESS,
			payload: data,

		});
	} catch (error) {
		dispatch({
			type: APPLY_FILTERS_FAIL,
			payload:
        error.response && error.response.data.message
        	? error.response.data.message
        	: error.message,
		});
	} 
   
};

