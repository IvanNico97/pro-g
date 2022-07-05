import React from 'react'
import { Flex, Image, Heading, Text, Button } from '@chakra-ui/react'
import { Link } from "react-router-dom";

const Item = ({ id, name, price, img }) => {
  return (
    <Flex 
      direction="column"
      align="center"
      justify='space-evenly'
      m='6'
      p='8'
      w='350px'
      h='400px'
      border='1px'
      borderColor='#E1E8ED'
      borderRadius='6'
    >
      <Flex
        pt='4'
      >
        <Image src={img} boxSize='180px'/>
      </Flex>
      <Flex 
        p='2'
      >
        <Heading align='center' size='lg'>{name}</Heading>
      </Flex>
      <Flex
        p='2'
      >
        <Text align='center' color='#555555' fontSize='2xl'>${price}</Text>
      </Flex>
      <Flex 
        p='2'
        mb='4'
      >
        <Link to={`/detail/${id}`}>
          <Button size='md' colorScheme='twitter'>Detalle del producto</Button>
        </Link>
      </Flex>
    </Flex>
  )
}

export default Item