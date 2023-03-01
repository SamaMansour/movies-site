import React from 'react';
import SearchBox from '../SearchBox/SearchBox';
import styled from 'styled-components';
import img from '../../assets/images/main-background.jpeg';


const Header = () => {
	const Container = styled.div `
    position: relative;
    width: 100%;
    background:url(${img});
    min-height: 50vh;
    background-size: cover;
  `;
	return (
		<>
			<Container>
				<div className="container py-5 text-center">
					<SearchBox/>
				</div>
			</Container>

		</>
	);
};

export default Header;