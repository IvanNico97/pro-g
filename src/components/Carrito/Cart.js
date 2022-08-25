import React, { useContext, useState } from 'react'
import ItemCart from './ItemCart'
import { 
  Flex,
  Box,
  Heading, 
  Text,
  Button
} from '@chakra-ui/react' 
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import CartModal from './CartModal'

const Cart = () => {
  const [ loading, setLoading ] = useState(false)
  const { cart, precioTotal, clearCart, cantidadProductos } = useContext (CartContext)


  if(cantidadProductos() === 0) {
    return (
      <Flex direction='column' align='center' justify='center' bg='black' color='white' p='100px'>
        <Heading>Your cart is empty</Heading>
          <Text pt='5'>Our products await you!</Text>
        <Box m='70px'>
          <Link to='/products'>
            <Button colorScheme='twitter' size='lg' borderRadius='full'>Shopping</Button>
          </Link>
        </Box>
      </Flex>
    )
  } 

  return (
    <>
      <Flex bg='black' color='white' direction='column'>
        <Box w='100%' align='center'>
          <Heading
            borderRadius='8' 
            w='250px' 
            size='md' 
            m='8' 
            p='6'
          >
            Cart
          </Heading>
        </Box>
        { 
          cart.map(producto => <ItemCart key={producto.id} producto={producto} isOrder={false} />)
        }
        <Box w='auto' align='center' justify='center'>
          <Heading size='2xl' m={{ base: '8', sm: '8', md: '10', lg: '10' }}>Total : ${precioTotal()}</Heading>
        </Box>
        <Flex direction={{ base: 'column', sm: 'column', md: 'row', lg: 'row' }} align='center' justify='center' m='2' mb='8'>
          <Box p='8'>
            <Button colorScheme='twitter' w='200px' borderRadius='full' onClick={()=> clearCart()}>Clear cart</Button>
          </Box>
          <Box>
            <Box>
              <CartModal />
            </Box>
          </Box>
        </Flex>
      </Flex>
    </>
  )
}

export default Cart