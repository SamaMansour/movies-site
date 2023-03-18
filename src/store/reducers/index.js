import { combineReducers } from 'redux';
import addFavouriteReducer from './favouriteReducers';
import authReducer from './authReducer';
import applySearchReducer from './searchReducers';
import applyFilterReducer from './filterReducers';

const rootReducer = combineReducers({
	favourite: addFavouriteReducer,
	search: applySearchReducer,
	filter: applyFilterReducer,
  auth: authReducer

  
});

export default rootReducer;