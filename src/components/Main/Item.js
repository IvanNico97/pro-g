import React from 'react'
import { Flex, Image, Heading, Text } from '@chakra-ui/react'
import Boton from '../Elements/Boton'


const Item = ({ name, price, img }) => {
  return (
    <>
      <Flex 
        direction="column"
        align="center"
        justify='space-around'
        m='6'
        p='8'
        w='350px'
        h='400px'
        border='1px'
        borderColor='#E1E8ED'
        borderRadius='8'
      >
        <Flex
          pt='4'
        >
          <Image src={img} boxSize='200px'/>
        </Flex>
        <Flex 
          p='2'
        >
          <Heading align='center' size='lg'>{name}</Heading>
        </Flex>
        <Flex
         p='2'>
          <Text align='center' color='#1DA1F2' fontSize='2xl'>${price}</Text>
        </Flex>
        <Flex 
          p='2'
          mb='4'>
        <Boton align='center'>Ver detalle del producto</Boton>
        </Flex>
      </Flex>
    </>
  )
}

export default Item