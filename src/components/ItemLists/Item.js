import React from 'react'
import { Flex, Image, Heading, Text } from '@chakra-ui/react'
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
      bg='black'
      className='animate__animated animate__fadeInUp'
    >
      <Flex
        pt='4'
      >
        <Link to={`/detail/${id}`}>  
          <Image src={img} boxSize='250px'/>
        </Link>
      </Flex>
      <Flex 
        p='2'
        mt='2'
      >
        <Heading align='center' size='md' color='white'>{name}</Heading>
      </Flex>
      <Flex
        p='2'
      >
        <Text align='center' fontSize='md' color='white'>${price}</Text>
      </Flex>
    </Flex>
  )
}

export default Item