import {
	APPLY_SEARCH_REQUEST,
	APPLY_SEARCH_SUCCESS,
	APPLY_SEARCH_FAIL } from './types.js';
import axios from "axios"; 


export const applySearch = (query) => async () => {

    const decodedQuery = query.replace(' ', '+');
		const API_KEY = 'd3fea0d49f7035466ab4c90405575aa0';

    const res = await axios.get (`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${decodedQuery}&page=1&include_adult=false`);
    const data = await res.data;
    return data;
   
 
   
 
  
};
