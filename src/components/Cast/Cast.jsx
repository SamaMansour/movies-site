import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { useQuery } from 'react-query';
import { fetchSingleMovie, fetchSingleMovieCredits } from '../../api';
import { Card, CardHeader, CardBody, CardFooter, Image, Stack, Heading, Text, Divider, Button } from '@chakra-ui/react';
import SlideshowWithPagination from 'react-slideshow-with-pagination';
import Slider from "@ant-design/react-slick";
import castSlider from './CastSlider';

const Cast = () => {

  

	const Cast = styled.div`
    
    display:inline-block;
    white-space:normal;
    margin: 4px;
    vertical-align:middle;
    align-items: center;
    border-radius: 150px;
    width: '8rem'
    `;

	const CastDescription = styled.div`
   max-width: 100px;
   font-size: 12px;`;

	const GenreButton=styled.button`
  background-color:#F8EFBA;
  background: linear-gradient:#F8EFBA;
  text-color:white;
  border: none;
  & before {
    height: 0%;
    width: 2px;
  }
  & hover {
    box-shadow:  4px 4px 6px 0 rgba(255,255,255,.5),
                -4px -4px 6px 0 rgba(116, 125, 136, .5), 
      inset -4px -4px 6px 0 rgba(255,255,255,.2),
      inset 4px 4px 6px 0 rgba(0, 0, 0, .4);
  }
  margin-left:3px;
  border-radius:0.2rem
  `;

	const CrewCard = styled.div`
    
  display:inline-block;
  white-space:normal;
  margin: 6px;
  vertical-align:middle;
  align-items: center;
  border-radius: 6px;
  width:13rem;
  height:3rem;
  background-color:#dfe4ea;
  font-size:18px;
  `;

	const { movieId } = useParams();
  
	const movieQuery = useQuery(['movie', movieId], () => fetchSingleMovie(movieId), { retry: false, select: state => state?.data });
	console.log('movieQuery:::', movieQuery);
	const movieCreditsQuery = useQuery(['moviecredits', movieId], () => fetchSingleMovieCredits(movieId), { retry: false, select: state => state?.data });
	console.log('movieCast:::', movieCreditsQuery);
	const movieCastData = movieCreditsQuery?.data?.cast;
  
	return (
		<>
    
			<h2 className="my-2">Film Cast:</h2>
			<div className="container d-flex flex-row justify-content-center row mb-2" style={{ backgroundColor: '#ecf0f1ey' }}>
        <Slider {...castSlider}>
          {
            movieCastData?.map(item =>
              <Cast key={item.id}>
                <img className="rounded" key={item} width={'100'} height={'150'} src={item.profile_path === null ? 'https://tigres.com.tr/wp-content/uploads/2016/11/orionthemes-placeholder-image-1.png' : ` https://image.tmdb.org/t/p/w200${item?.profile_path}`} alt="" />
                <CastDescription>
                  <h6  style={{ color: '#2c3e50' }}><strong>{item.name}</strong></h6>
                  <h6  style={{ color: '#2c3e50' }}>Role:{item.character}</h6>
                </CastDescription>
              </Cast>
            )
          }
        </Slider>
			          
			</div>
			
		</>
	);
};

export default Cast;