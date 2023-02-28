import React from 'react';
import { Card, CardHeader, CardBody, CardFooter, Image, Stack, Heading, Text, Divider } from '@chakra-ui/react';
import { Link } from "react-router-dom";


export default function ItemCard ({img, overview,title}) {
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
           
            <Text>
              { overview }
            </Text>
          </Stack>
        </CardBody>
      </Card>
    </div>
  )
}
