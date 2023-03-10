import { combineReducers } from 'redux';
import addFavouriteReducer from './favouriteReducers';
import applySearchReducer from './searchReducers';
import applyFilterReducer from './filterReducers';

const rootReducer = combineReducers({
	favourite: addFavouriteReducer,
	search: applySearchReducer,
	filter: applyFilterReducer
  
});

export default rootReducer;