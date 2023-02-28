import React, { useContext, useState } from 'react'
import ItemCart from './ItemCart'
import { 
  Flex,
  Box,
  Heading, 
  Text,
  Button,
  Divider,
  Image
} from '@chakra-ui/react' 
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import CartModal from './CartModal'
import {LOGO10} from '../Imagenes/index'
import { BsFillCartFill } from "react-icons/bs";


const Cart = () => {
  const [ loading, setLoading ] = useState(false)
  const { cart, cantidadProductos } = useContext (CartContext)


  if(cantidadProductos() === 0) {
    return (
      <Flex direction='column' align='center' justify='center' bg='black' color='white' p='120px'>
        <Heading pt='60px'>Tu carrito esta vacío</Heading>
          <Text pt='5'>¡Nuestros productos te esperan!</Text>
        <Box m='70px'>
          <Link to='/productos'>
            <Button colorScheme='twitter' size='lg' borderRadius='8'>Productos</Button>
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
            <Image src={LOGO10}/>
          </Heading>
        </Box>
        <Divider/>
        { 
          cart.map(producto => <ItemCart key={producto.id} producto={producto} /* isOrder={false}  *//>)
        }
        <CartModal />  
      </Flex>
    </>
  )
}

export default Cart