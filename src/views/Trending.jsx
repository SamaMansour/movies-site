import React from 'react';
import Card from '../components/ItemCard';
import { Button, ButtonGroup, Box } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import SlideshowWithPagination from 'react-slideshow-with-pagination';
import { API_KEY } from '../api';
import sliderSettings from '../components/Slider';
import Slider from '@ant-design/react-slick';

function Trending(props) {
	const [timeData,setTimeData]=useState('day');
	const [data,setData]=useState([]);

	const trending_url=`https://api.themoviedb.org/3/trending/movie/${timeData}?api_key=${API_KEY}`;
	useEffect(() => {
		fetch(trending_url)
			.then((response) => response.json())
			.then((json) => {
				setData(json);
			});
	}, [timeData]);

	function handleDayButton() {
		setTimeData('day');
		console.log(trending_url);
	}

	function handleWeekButton() {
		setTimeData('week');
		console.log(trending_url);
	}

	return (
		<> <div>
			<h1 className='offset-1 mb-2'>Trending
				<Box
					sx={{
						display: 'inline',
						flexDirection: 'column',
						alignItems: 'start',
						'& > *': {
							m: 1,
							mb: 2,
						},
					}}
				>
					<ButtonGroup size="medium" >
						<Button key="today" colorScheme= "blue" onClick={handleDayButton}>Today</Button>
						<Button key="lastweek" colorScheme= "blue" onClick={handleWeekButton}>Last Week</Button>
					</ButtonGroup>
				</Box>
			</h1>
		</div>
		<div className="container-fluid row">
			<Slider {...sliderSettings}>
				{ 
					data?.results?.map((item, index) => (
						//console.log("dayItem", item),
						<div key={index} className="col-sm-4 mb-2">
							<Link to={`/detail/${item.id} `} style={{ color:'#323232',textDecoration: 'none'}}>
								<Card img={`http://image.tmdb.org/t/p/w500${item.poster_path}`} title={item.title} releaseDate={item.release_date} className='offset-1'/>
            
							</Link>
						</div>
					))
				}
			</Slider>
      
		</div>
		</>
	);
}

export default Trending;



