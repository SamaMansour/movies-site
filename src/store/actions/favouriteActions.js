
import { 
	ADD_FAVOURITE_SUCCESS,
	ADD_FAVOURITE_FAIL
} from './types';

export const addFavourite = (data, id)=> async (dispatch) => {
	
  try {
		
		const data = data.results.find(item => item.id === id);
		console.log(data);
  
		dispatch({
			type: ADD_FAVOURITE_SUCCESS,
			payload: data,

		});
	} catch (error) {
		dispatch({
			type: ADD_FAVOURITE_FAIL,
			payload:
        error.response && error.response.data.message
        	? error.response.data.message
        	: error.message,
		});

  }};