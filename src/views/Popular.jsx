import React, { useEffect,useState } from 'react';
import {API_KEY, BASE_API, fetchTopRatedMovies,img_url} from '../api';
import Card from '../components/ItemCard';
import Slider from 'react-slick';
import {Link} from 'react-router-dom';
import ButtonCard from '../components/IconButtons/ButtonCard';
import FilterPage from '../components/FilterPage/FilterPage';
import { Button } from '@mui/material';
import styled from 'styled-components';
import Footer from '../components/Footer/Footer';

function TopRated(props) {
	const [page, setPage] = useState(1);
	const [data,setData]=useState([]);
	const [genreId,setGenreId]=useState();

	const fetchLoadMore = async (page) => await BASE_API.get(`/movie/popular?api_key=${API_KEY}&page=${page}&with_genres=${genreId}`).then((response) => {
		const movies = response.data.results;
		const subData = [];
		subData.push(...data);
		subData.push(...movies);
		setData(subData);
	});

	useEffect(() => {
		fetchLoadMore(page);
		console.log(page);
		console.log(data);
	}, [page]);

	return (<>
		<h1 className='offset-1'>Top Rated Movies</h1>
		<div className="container-fluid row ">
			<FilterPage/>
			
		</div>
	</>);
}

export default TopRated;

const LoadButton = styled.button`
  display: block;
  width: 100%;
  padding: 12px 0;
  margin-left:
  font-family: inherit;
  font-size: 14px;
  font-weight: 700;
  color: #fff;
  background-color: #ff5e57;
  border: 0;
  border-radius: 35px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.08);
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);

  &:hover {
    box-shadow: 0 15px 15px rgba(0, 0, 0, 0.16);
    transform: translate(0, -5px);
  }
`;


