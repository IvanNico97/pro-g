import React, { useContext } from 'react'
import ItemCart from './ItemCart'
import { Flex, Box, Heading } from '@chakra-ui/react'
import { CartContext } from '../../context/CartContext'
import Boton from '../Elements/Boton'
import { Link } from 'react-router-dom'

const Cart = () => {

const { cart, precioTotal, clearCart, cantidadProductos } = useContext (CartContext)

  if(cantidadProductos() === 0) {
    return (
      <Flex direction='column' align='center' justify='center' m='100px'>
        <Heading>No hay productos en el carrito</Heading>
        <Box m='100px'>
          <Link to='/'>
            <Boton colorScheme='twitter' size='lg'>Continue Comprando</Boton>
          </Link>
        </Box>
      </Flex>
    )
  }

  return (
    <>
      <Flex justify='center' align='center'>
        <Heading size='3xl' m='10'>Carrito</Heading>
      </Flex>
      { 
        cart.map(productos => <ItemCart key={productos.id} {...productos}/>)
      }
      <Flex align='center' justify='center'>
        <Heading>Total a Pagar : ${precioTotal()}</Heading>
      </Flex>
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