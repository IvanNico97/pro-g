import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Flex, Box, Heading, Button, Divider, Image } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const ItemCart = (producto) => {
    const { removeItem } = useContext (CartContext)
    const { id, name, price, quantity, img } = producto.producto;
    
  return (
    <>
        <Flex 
            ml='8'
            mr='8'
            mb='10'
            p='8'
            direction={{ base: 'column', sm: 'column', md: 'row', lg: 'row' }}
            justify={{ base: 'center', sm: 'center', md: 'space-around', lg: 'space-around' }}
            align='center'
            bg='black' 
            color='white'  
        > 
            <Box boxSize='200px'>
                <Image src={img} />
            </Box>
            <Flex direction='column'>
                <Box align='center' pb='4'>
                    <Link to={`/detail/${id}`}>
                        <Heading align='center'>
                            {name}
                        </Heading>
                    </Link>
                </Box>
                <Box pb='10' align='center'>
                    <small>cantidad: {quantity}</small>
                </Box>
                <Box align='center'>
                    <Heading size='lg'>
                        $ {price * quantity}
                    </Heading>
                </Box>
            </Flex>
            <Flex 
                pb={{ base: '2', sm: '2', md: '150px', lg: '150px' }}
                pt={{ base: '50px', sm: '50px' }}
            >
                <Box>
                    <Button 
                        bg='black'
                        color='white'
                        borderRadius='8' 
                        onClick={()=> removeItem(id)}
                        align='center'
                    >
                        X
                    </Button>
                </Box>
            </Flex>
        </Flex> 
        <Box ml='10' mr='10'>
            <Divider/>
        </Box>
    </>
  )
}

export default ItemCart