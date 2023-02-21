import React from 'react';
import { Card, CardHeader, CardBody, CardFooter, Image, Stack, Heading, Text, Divider, Button } from '@chakra-ui/react';


const DescriptionCard = ({ img, releaseDate, title,description}) => {
  return (
    <Card
      direction={{ base: 'column', sm: 'row' }}
      overflow='hidden'
      variant='outline'
    >
      <Image
        objectFit='cover'
        maxW={{ base: '100%', sm: '200px' }}
        src={img}
        alt='img'
      />

      <Stack>
        <CardBody>
          <Heading size='md'></Heading>
            { title }
          <Text py='2'>
            {description}
          </Text>
          <Text color='blue.600' fontSize='2xl'>
            { releaseDate }
          </Text>
        </CardBody>
      </Stack>
    </Card>  )
}

export default DescriptionCard