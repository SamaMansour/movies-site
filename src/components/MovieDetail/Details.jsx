import { useParams } from "react-router-dom"
import React, { useState } from "react";
import { useQuery } from 'react-query';
import { fetchSingleMovie } from '../../api';
import { Card, CardHeader, CardBody, CardFooter, Image, Stack, Heading, Text, Divider, Button } from '@chakra-ui/react';





const Details = (props) => {
    const { movieId } = useParams();
    const [data, setData] = useState([]);


    const movieQuery = useQuery(["movie", movieId], () => fetchSingleMovie(movieId), { retry: false, select: state => state?.data })
    console.log("movieQuery:::", movieQuery);

    const movieData = movieQuery?.data;
		console.log(movieData?.vote_average);


    return (
        <>
          <div className="container -fluid ">
						<Card
								direction={{ base: 'column', sm: 'row' }}
								overflow='hidden'
								variant='outline'
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
								</CardFooter>
						</Stack>
					</Card>
				</div>
      </>
    )
};


export default Details;