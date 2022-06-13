import React, {useContext} from 'react'
import { CartContext } from '../../context/CartContext'
import { Flex, Box, Heading, Text } from '@chakra-ui/react'
import Boton from '../Elements/Boton'
import { Link } from 'react-router-dom'


const ItemCart = ({ id, name, price, quantity }) => {
    const { removeItem } = useContext (CartContext)

  return (
    <>
        <Flex 
            m='8'
            p='8'
            justify='space-around' 
            align='center'
            border='1px'
            borderRadius='6' 
            borderColor='#E1E8ED' 
        >
            <Box>
                <Link to={`/detail/${id}`}>
                    <Heading>
                        {name}
                    </Heading>
                </Link>
                <Box>
                    <Text fontSize='xl' color='#555555'>
                        c/u : ${price}
                    </Text>
                </Box>
            </Box>
            <Box>
                <Text fontSize='xl' color='#555555'>
                    Cantidad: {quantity}
                </Text>
            </Box>
            <Box>
                <Heading>
                    ${price * quantity}
                </Heading>
            </Box>
            <Flex direction='column'>
                <Box mb='3'>
                    <Boton w='100px' colorScheme='twitter' click={()=> removeItem(id)}>Eliminar</Boton>
                </Box>
                <Box>
                    <Boton w='100px' colorScheme='twitter'>Comprar</Boton>
                </Box>
            </Flex>
        </Flex> 
    </>
  )
}

export default ItemCart