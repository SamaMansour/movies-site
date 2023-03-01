import { useParams } from "react-router-dom"
import React, { useState } from "react";
import { useQuery } from 'react-query';
import { fetchSingleMovie } from '../../api';
import { Card, CardHeader, CardBody, CardFooter, Image, Stack, Heading, Text, Divider, Button } from '@chakra-ui/react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Details = (props) => {
    const { movieId } = useParams();
    const [data, setData] = useState([]);
    const movieQuery = useQuery(["movie", movieId], () => fetchSingleMovie(movieId), { retry: false, select: state => state?.data })
    console.log("movieQuery:::", movieQuery);
    const movieData = movieQuery?.data;
		console.log(movieData?.vote_average);
		const percentage = Math.ceil(movieData?.vote_average*10);


    return (
        <>
          <div className="container -fluid ">
						<Card
								direction={{ base: 'column', sm: 'row' }}
								overflow='hidden'
								variant='outline'
								bgImage={`https://image.tmdb.org/t/p/w500` + movieData?.poster_path}
								bgPosition= "top"
								bgRepeat={"no-repeat"}
								bgSize="cover"
								backdropFilter='auto'
								backdropBlur='80px'
								height='500px'
						>
						<Image
								objectFit='cover'
								maxW={{ base: '100%', sm: '200px' }}
								src= {`https://image.tmdb.org/t/p/w500` + movieData?.poster_path}
								alt='Caffe Latte'
						/>

						<Stack>
								<CardBody>
								<Heading size='md'> {movieData?.title} </Heading>

								<Text py='2'>
									{movieData?.overview}
								</Text>
								
								</CardBody>

								<CardFooter>
									<Text color='blue.600' fontSize='2xl'>
										{movieData?.release_date}
									</Text>
									<Text color='blue.600' fontSize='2xl'>
										{movieData?.runtime}
									</Text>
									<div style={{ width: 100, height: 100, marginTop: 50, marginLeft: -150 }}>
										<CircularProgressbar width='50%' value={percentage} text={`${percentage}%`} />;
									</div>
								</CardFooter>
						</Stack>
					</Card>
				</div>
      </>
    )
};


export default Details;