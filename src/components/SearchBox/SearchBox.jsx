import React, { useEffect, useState } from 'react';
import ListItem from './ListItem';
import SearchInput from './SearchInput';
import debounce from 'lodash.debounce';
import { useDispatch, useSelector } from 'react-redux';
import { applySearch } from '../../store/actions/searchActions';

export default function SearchBox() {
	const [searchData, setSearchData] = useState([])
	const dispatch = useDispatch();
	const fetchData = async (query, cb) => {
		console.warn('fetching ' + query); 
		const res = await dispatch(applySearch(query));
		console.log('result of data' + res.payload);
		cb((res.payload));
	};
	
	const debouncedFetchData = debounce((query, cb) => {
		fetchData(query, cb);
	}, 500);
	const [query, setQuery] = React.useState('');
	const [results, setResults] = React.useState([]);
	const img_url='http://image.tmdb.org/t/p/w500';
	React.useEffect(() => {
		debouncedFetchData(query, res => {
			setResults(res);
		});
	}, [query]);
  

	
	return (
		<div>
			<SearchInput
				value={query}
				onChangeText={e => {
					setQuery(e.target.value);
				}}
			/>
			{console.log(results),
			results?.results?.map((result, index) => (
				<div key={index}>
					<ListItem
						title={result.title}
						imageUrl={`${img_url}${result.poster_path}`}
						caption={result.release_date}
						id={result.id}
					/>
          
				</div>
			))}
		</div>
	);
}