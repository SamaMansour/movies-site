import React from 'react';
import styled from 'styled-components';
import { Input } from '@chakra-ui/react';

const SearchContainer=styled.div`  
display: flex;
justify-content: center;
margin-bottom: 24px;
width:100%;
`;



const SearchInput = ({ value, onChangeText ,onFormSubmit}) => {
	React.useEffect(() => {
		let input = document.querySelector('input');
		input.addEventListener('input', onChangeText);
		return input.removeEventListener('input', onChangeText);
	}, []);

	return (
		<SearchContainer>
			<form onSubmit={onFormSubmit}>
				<Input
					type="text"
					value={value}
					onChange={onChangeText}
					placeholder="Search movie by name"
					width={'500'}
				/>
			</form>
		</SearchContainer>
	);
};

export default SearchInput;

