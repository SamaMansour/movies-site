import { combineReducers } from 'redux';
import favouriteReducers from './favouriteReducers';
import searchReducers from './searchReducers';

const rootReducer = combineReducers({
	favourite: favouriteReducers,
	search: searchReducers
  
});

export default rootReducer;