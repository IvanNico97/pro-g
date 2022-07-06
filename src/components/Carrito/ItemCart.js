import React, {useContext} from 'react'
import { CartContext } from '../../context/CartContext'
import { Flex, Box, Heading, Text, Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { BsTrashFill } from "react-icons/bs";


const ItemCart = (producto) => {
    const { removeItem } = useContext (CartContext)
    const { id, name, price, quantity } = producto.producto;

  return (
    <>
        <Flex 
            ml='8'
            mb='10'
            mr='8'
            p='8'
            direction={{ base: 'column', sm: 'column', md: 'row', lg: 'row' }}
            align='center'
            justify='space-around' 
            border='1px'
            borderRadius='6' 
            borderColor='#E1E8ED' 
        > 
            <Box align='center'>
                <Link to={`/detail/${id}`}>
                    <Heading>
                        {name}
                    </Heading>
                </Link>
                <Box>
                    <Text fontSize='xl' color='#555555' pt={{ base: '3', sm: '3', md: '2', lg: '2' }}>
                        c/u : ${price}
                    </Text>
                </Box>
            </Box>
            <Box>
                <Text fontSize='xl' color='#555555' m={{ base: '4', sm: '4', md: '2', lg: '2' }}>
                    Cantidad: {quantity}
                </Text>
            </Box>
            <Box>
                <Heading>
                    ${price * quantity}
                </Heading>
            </Box>

            {
                !producto.isOrder && 
                    <Flex direction='column'>
                        <Box mb='3' pt='4'>
                            <Button leftIcon={<BsTrashFill/>} w='100px' colorScheme='twitter' onClick={()=> removeItem(id)}>Eliminar</Button>
                        </Box>
                    </Flex>
            }
            
        </Flex> 
    </>
  )
}

export default ItemCart