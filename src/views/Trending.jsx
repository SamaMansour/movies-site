import React from 'react';
import Card from '../components/ItemCard';
import { Button, ButtonGroup, Box } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import SlideshowWithPagination from 'react-slideshow-with-pagination';

function Trending(props) {
	const [timeData,setTimeData]=useState('day');
	const [data,setData]=useState([]);

	const trending_url=`https://api.themoviedb.org/3/trending/movie/${timeData}?api_key=14ccdb96456935bbb41591e99697d262`;
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
			<SlideshowWithPagination
				showNumbers={true}
				showDots={true}
				showArrows={true}
				numberOfCardsPerScreen={1}
				showOneCardForWidthLower="sm"
				slideshowContainerMaxWidth={false}
				cardWidth={500}
				cardHeight={300}
			>
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
			</SlideshowWithPagination>
      
		</div>
		</>
	);
}

export default Trending;



