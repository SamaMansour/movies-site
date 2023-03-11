
import { 
	ADD_FAVOURITE_SUCCESS,
	ADD_FAVOURITE_FAIL
} from './types';

export const addFavourite = (data, id) => {
  const res = data.results.find(item => item.id === id)
  return {
    type: 'ADD_FAVOURITE_SUCCESS',
    payload: res
   }
	
}