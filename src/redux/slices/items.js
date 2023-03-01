import { createSlice } from '@reduxjs/toolkit';

export const itemSlice = createSlice({
	name: 'items',
	initialState: [],
	reducers: {
		addItem: (state, action) => {
			state.unshift(action.payload);
		},
		remove: (state, action) => {
			return state.filter((e) => e.id !== action.payload);
		},
	}});

export const { addItem, remove } = itemSlice.actions;
export default itemSlice.reducer;