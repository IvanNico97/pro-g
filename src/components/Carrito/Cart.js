import React, { useContext } from 'react'
import ItemCart from './ItemCart'
import { Flex, Box } from '@chakra-ui/react'
import { CartContext } from '../../context/CartContext'
import Boton from '../Elements/Boton'

const Cart = () => {
  const { cart, clearCart } = useContext (CartContext)

  return (
    <>
      { 
        cart.map(productos => <ItemCart key={productos.id} {...productos}/>)
      }
      <Flex align='center' justify='center' m='10'>
      <Box p='8'>
        <Boton colorScheme='twitter' w='200px' click={()=> clearCart()}>Limpiar Carrito</Boton>
      </Box>
      <Box p='8'>
        <Boton colorScheme='twitter' w='200px'>Terminar Compra</Boton>
      </Box>
      </Flex> 
    </>
  )
}

export default Cart