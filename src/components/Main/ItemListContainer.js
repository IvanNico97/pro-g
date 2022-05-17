import React from 'react'
import { Flex, Box } from '@chakra-ui/react'
import Counter from './ItemCount'
import Boton from '../Header/Boton'

const ItemListContainer = (props) => {
  return (
    <>
    <Flex
    m='10px'
    p='20px'
    w='25%'
    direction='column'
    align="center"
    justify="center"
    bg='#14171A'
    color='white'>
      <Box align="center" fontSize='3xl'>{props.greeting}</Box>
      <Counter 
      initial={1}
      stock={10}
      />
      <Boton m='2' click=''>Agregar al carrito</Boton>
    </Flex>
    </>
  )
}

export default ItemListContainer