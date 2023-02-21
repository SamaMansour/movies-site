import React from 'react';
import { useQuery } from 'react-query';
import { fetchSingleMovie } from '../../api';
import { Card, CardHeader, CardBody, CardFooter, Image, Stack, Heading, Text } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';


const Details = (props) => {
  const movieId = useParams();
  const movieQuery = useQuery(["movie", movieId], () => fetchSingleMovie(movieId), { retry: false, select: state => state?.data })
  const movieData = movieQuery?.data;
  console.log(movieData);

  return (
  <Card maxW='sm'>
    <CardBody>
      <Image
        key={movieData.id}
        src={movieData?.poster_path}
        alt='imgs'
        borderRadius='lg'
      />
      <Stack mt='6' spacing='3'>
        <Heading size='md'>{movieData?.title}</Heading>
        <Text>
          {movieData.plot_summary}
        </Text>
        <Text color='blue.600' fontSize='2xl'>
          {movieData.release_date}
        </Text>
      </Stack>
  </CardBody>
</Card>
  )
}

export default Details