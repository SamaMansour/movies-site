import {
	APPLY_FILTERS_REQUEST,
	APPLY_FILTERS_SUCCESS,
	APPLY_FILTERS_FAIL } from './types.js';
import axios from "axios"; 
import { fetchSort } from "../../api";

export const applyFilters = (dateTo, dateFrom, genre_id, sliderValue, page) => async (dispatch) => {
	try {
		dispatch({ type: APPLY_FILTERS_REQUEST });

		const { data } = fetchSort(dateTo, dateFrom, genre_id, sliderValue, page)
		dispatch({
			type: APPLY_FILTERS_SUCCESS,
			payload: data,
		});
		console.log('sent');
	} catch (error) {
		dispatch({
			type: APPLY_FILTERS_FAIL,
			payload:
        error.response && error.response.data.message ? error.response.data.message : error.message,
		});
		console.log('fail');
	}
};
