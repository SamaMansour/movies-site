import React from 'react';
import { Card, CardHeader, CardBody, CardFooter, Image, Stack, Heading, Text, Divider } from '@chakra-ui/react';
import { Link } from "react-router-dom";


const ItemCard = ({img,releaseDate,title,id}) => {
  return (
    <div>
      <Card maxW='sm'>
        <CardBody>
          <Image
            src={img}
            alt='Green double couch with wooden legs'
            borderRadius='lg'
          />
          <Stack mt='6' spacing='3'>
            <Heading size='md'>{title}</Heading>
            <Link  to={"detail/"+{id}} style={{ color: 'black',textDecoration: 'none' }}> </Link>
            <Text color='blue.600' fontSize='2xl'>
              { releaseDate }
            </Text>
          </Stack>
        </CardBody>
      </Card>
    </div>
  )
}

export default ItemCard