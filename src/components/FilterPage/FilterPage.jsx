import React from 'react';
import { useQuery } from 'react-query';
import { Button, ButtonGroup, Wrap } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import {
	Slider,
	SliderTrack,
	SliderFilledTrack,
	SliderThumb,
	SliderMark,
	Box
} from '@chakra-ui/react';
import { fetchSort, fetchSortFilterDiscover,img_url, BASE_API, API_KEY } from '../../api';
import ItemCard from '../ItemCard';
import { applyFilters } from "../../store/actions/filterActions";
function FilterPage(props) {
	const [genre_id, setGenre_id] = useState([]);
	const [dateTo, setDateTo] = useState('');
	const [dateFrom, setDateFrom] = useState('');
	const [data, setData] = useState(false);
	const [page, setPage] = useState(1);
	const filtered=[];
	const [sliderValue, setSliderValue] = useState(0);
	const [showTooltip, setShowTooltip] = useState(false);

	const labelStyles = {
		mt: '2',
		ml: '-2.5',
		fontSize: 'sm',
	};

	const dispatch = useDispatch();
  
	const sortQueryDiscover = useQuery(
		['SortData', dateTo,dateFrom,genre_id, sliderValue, page],
		() => dispatch(applyFilters(dateTo, dateFrom, genre_id, sliderValue, page)),
		{
			retry: false,
		}
	);

	function handleSearch(){
		setTimeout(()=>console.log('data=',sortQueryDiscover.data.data.results),
			200);
		console.log('query=',sortQueryDiscover);
		setData(true);

	}
	var dataResults=sortQueryDiscover?.data?.results;

	const fetchLoadMore = async (page) => await BASE_API.get(`/movie/popular?api_key=${API_KEY}&page=${page}&with_genres=${genre_id}`).then((response) => {
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


	if(!data){return (<>
		<div className='col-sm-8'>
			<div className=" d-flex flex-column">
				<h3 className="mt-3">Filter By</h3>
				<Box pt={6} pb={2}>
					<Slider id='slider'
						defaultValue={5}
						min={0}
						max={10}
						colorScheme='teal'
						onChange={(v) => setSliderValue(v)}
						onMouseEnter={() => setShowTooltip(true)}
						onMouseLeave={() => setShowTooltip(false)}>
						<SliderMark value={0} {...labelStyles}>
              0
						</SliderMark>
						<SliderMark value={5} {...labelStyles}>
              5
						</SliderMark>
						<SliderMark value={10} {...labelStyles}>
              10
						</SliderMark>
						<SliderMark
							value={sliderValue}
							textAlign='center'
							bg='blue.500'
							color='white'
							mt='-10'
							ml='-5'
							w='12'
						>
							{sliderValue}%
						</SliderMark>
						<SliderTrack>
							<SliderFilledTrack />
						</SliderTrack>
						<SliderThumb />
					</Slider>
				</Box>

				<label htmlFor="text" className="mt-3">
          From:
				</label>
				<input type="date" onChange={(e) => setDateTo(e.target.value)} />
				<label htmlFor="text" className="mt-3">
          To:
				</label>
				<input type="date" onChange={(e) => setDateFrom(e.target.value)} />
			</div>

			<ButtonGroup>
				<Button
					className="m-2"
					onClick={(e) => setGenre_id(e.target.value)}
					value={28}
					colorScheme='blue'
				>
          Action
				</Button>
				<Button
					className="m-2"
					onClick={(e) => setGenre_id(e.target.value)}
					value={12}
					colorScheme='blue'
				>
          Adventure
				</Button>
				<Button
					className="m-2"
					onClick={(e) => setGenre_id(e.target.value)}
					value={35}
					colorScheme='blue'
				>
          Comedy
				</Button>
			</ButtonGroup>
			<ButtonGroup>
				<Button
					className="m-2"
					onClick={(e) => setGenre_id(e.target.value)}
					value={10749}
					colorScheme='blue'
				>
          Romance
				</Button>
				<Button
					className="m-2"
					onClick={(e) => setGenre_id(e.target.value)}
					value={18}
					colorScheme='blue'
				>
          Drama
				</Button>
				<Button
					className="m-2"
					onClick={(e) => setGenre_id(e.target.value)}
					value={80}
					colorScheme='blue'
				>
          Crime
				</Button>
			</ButtonGroup>
			<ButtonGroup>
				<Button
					className="m-2"
					onClick={(e) => setGenre_id(e.target.value)}
					value={27}
					colorScheme='blue'
				>
          Horror
				</Button>
				<Button
					className="m-2"
					onClick={(e) => setGenre_id(e.target.value)}
					value={878}
					colorScheme='blue'
				>
          Science Fiction
				</Button>
				<Button
					className="m-2"
					onClick={(e) => setGenre_id(e.target.value)}
					value={10752}
					colorScheme='blue'

				>
          War
				</Button>
			</ButtonGroup>

			<Button
       
				size="sm"
				onClick={handleSearch}
				colorScheme='blue'
			>

        Search
			</Button>
     
		</div>
		<h3>Results:</h3>
	</>);
	}
	if(data){
		return(<>
   
			<div className=" d-flex flex-column">
				<h3 className="mt-3">Filter By</h3>
				<Box pt={6} pb={2}>
					<Slider id='slider'
						defaultValue={5}
						min={0}
						max={10}
						colorScheme='teal'
						onChange={(v) => setSliderValue(v)}
						onMouseEnter={() => setShowTooltip(true)}
						onMouseLeave={() => setShowTooltip(false)}>
						<SliderMark value={0} {...labelStyles}>
              0
						</SliderMark>
						<SliderMark value={5} {...labelStyles}>
              5
						</SliderMark>
						<SliderMark value={10} {...labelStyles}>
              10
						</SliderMark>
						<SliderMark
							value={sliderValue}
							textAlign='center'
							bg='blue.500'
							color='white'
							mt='-10'
							ml='-5'
							w='12'
						>
							{sliderValue}%
						</SliderMark>
						<SliderTrack>
							<SliderFilledTrack />
						</SliderTrack>
						<SliderThumb />
					</Slider>
				</Box>

				<label htmlFor="text" className="mt-3">
        From:
				</label>
				<input type="date" onChange={(e) => setDateTo(e.target.value)} />
				<label htmlFor="text" className="mt-3">
        To:
				</label>
				<input type="date" onChange={(e) => setDateFrom(e.target.value)} />
			</div>

			<ButtonGroup size="sm" className="mt-2">
				<Button
					className="m-2"
					onClick={(e) => setGenre_id(e.target.value)}
					value={28}
					colorScheme='blue'
				>
        Action
				</Button>
				<Button
					className="m-2"
					onClick={(e) => setGenre_id(e.target.value)}
					value={12}
					colorScheme='blue'
				>
        Adventure
				</Button>
				<Button
					className="m-2"
					onClick={(e) => setGenre_id(e.target.value)}
					value={35}
					colorScheme='blue'
				>
        Comedy
				</Button>
			</ButtonGroup>
			<ButtonGroup size="sm">
				<Button
					className="m-2"
					onClick={(e) => setGenre_id(e.target.value)}
					value={10749}
					colorScheme='blue'
				>
        Romance
				</Button>
				<Button
					className="m-2"
					onClick={(e) => setGenre_id(e.target.value)}
					value={18}
					colorScheme='blue'
				>
        Drama
				</Button>
				<Button
					className="m-2"
					onClick={(e) => setGenre_id(e.target.value)}
					value={80}
					colorScheme='blue'
				>
        Crime
				</Button>
			</ButtonGroup>
			<ButtonGroup size="sm">
				<Button
					className="m-2"
					onClick={(e) => setGenre_id(e.target.value)}
					value={27}
					colorScheme='blue'
				>
        Horror
				</Button>
				<Button
					className="m-2"
					onClick={(e) => setGenre_id(e.target.value)}
					value={878}
					colorScheme='blue'
				>
        Science Fiction
				</Button>
				<Button
					className="m-2"
					onClick={(e) => setGenre_id(e.target.value)}
					value={10752}
					colorScheme='blue'
				>
        War
				</Button>
			</ButtonGroup>

			<Button
				className="m-2"
				size="sm"
				onClick={handleSearch}
				colorScheme='blue'
			>

      Search
			</Button>
			{/* <Button
      className="m-2"
      variant="primary"
      size="sm"
      onClick={() => {
       filtered=[]
      }}
    >
      Reset
    </Button> */}
    
			<h3>Results:</h3>
    
			<div className="container d-flex flex-wrap allign-item-space-between"> {
      
				dataResults.map((item,index)=>(
					console.log(item),
					<div key={index} className="col-sm-4">

						<Link to={`/detail/${item.id} `} style={{ color: 'black' }}><ItemCard img={`${img_url}${item.poster_path}`} title={item.title} releaseDate={item.release_date} id={item.id}/></Link>
						{console.log(img_url+item.poster_path)}
       
					</div>
    
       
				))
			}
			</div>
			{ data.length > 0 ?
				<LoadButton className='allign-item-center' onClick={()=>setPage(page+1)}>Load More</LoadButton>
				:<div></div>
			}	
  
		</>);
    
	}
}


export default FilterPage;