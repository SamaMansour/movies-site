import {
	APPLY_FILTERS_REQUEST,
	APPLY_FILTERS_SUCCESS,
	APPLY_FILTERS_FAIL } from './types.js';
import axios from "axios"; 

export const applyFilters = (dateTo, dateFrom, genreId, sliderValue, page) => async () => {
	const API_KEY = process.env.REACT_APP_API_KEY;
	const res = await axios.get (`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&page=${page}&release_date.lte=${dateTo}&release_date.gte=${dateFrom}&with_genres=${genreId}&vote_average.gte=${sliderValue}`);
  const data = await res.data;
  return data;
   
};
