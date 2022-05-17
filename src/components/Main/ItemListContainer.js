import React from 'react'
import { Flex, Box, Image } from '@chakra-ui/react'
import Counter from './ItemCount'
import Boton from '../Header/Boton'
import placa2 from '../Imagenes/placa2.jpg'

const ItemListContainer = (props) => {
  return (
    <>
    <Flex
    m='10px'
    p='5px'
    w='25%'
    direction='column'
    align="center"
    justify="space-between"
    color='#14171A'
    >
      <Box pt='4' align="center" fontSize='2xl'>{props.greeting}</Box>
      <Image p='6' boxSize='250px' src={placa2}/>
      <Counter 
      initial={1}
      stock={10}
      />
      <Boton m='2'>Agregar al carrito</Boton>
    </Flex>
    </>
  )
}

export default ItemListContainer