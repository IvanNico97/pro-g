import React, { useContext, useState } from 'react'
import ItemCart from './ItemCart'
import { 
  Flex,
  Box,
  Heading, 
  Text 
} from '@chakra-ui/react' 
import { CartContext } from '../../context/CartContext'
import Boton from '../Elements/Boton'
import { Link } from 'react-router-dom'
import CartModal from './CartModal'

const Cart = () => {
  const [ loading, setLoading ] = useState(false)
  const { cart, precioTotal, clearCart, cantidadProductos } = useContext (CartContext)


  if(cantidadProductos() === 0) {
    return (
      <Flex direction='column' align='center' justify='center' m='100px'>
        <Heading>Tu carrito está vacío</Heading>
          <Text pt='5'>¡Nuestros productos te esperan!</Text>
        <Box m='70px'>
          <Link to='/'>
            <Boton colorScheme='twitter' size='lg'>Continue Comprando</Boton>
          </Link>
        </Box>
      </Flex>
    )
  } 

  return (
    <>
      <Box w='100%' align='center'>
        <Heading bg='#E1E8ED' color='#14171A' borderRadius='8' w='250px' size='md' m='8' p='6'>Cart</Heading>
      </Box>
      { 
        cart.map(producto => <ItemCart key={producto.id} producto={producto} isOrder={false} />)
      }
      <Box w='auto' align='center' justify='center'>
        <Heading size='2xl' m={{ base: '8', sm: '8', md: '10', lg: '10' }}>Total a Pagar: ${precioTotal()}</Heading>
      </Box>
      <Flex direction={{ base: 'column', sm: 'column', md: 'row', lg: 'row' }} align='center' justify='center' m='2' mb='8'>
        <Box p='8'>
          <Boton colorScheme='twitter' w='200px' click={()=> clearCart()}>Limpiar Carrito</Boton>
        </Box>
        <Box>
          <Box>
            <CartModal />
          </Box>
        </Box>
      </Flex> 
    </>
  )
}

export default Cart