import React, {useContext} from 'react'
import { CartContext } from '../../context/CartContext'
import { Flex, Box, Heading, Text, Button, Divider } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { BsTrashFill } from "react-icons/bs";

const ItemCart = (producto) => {
    const { removeItem } = useContext (CartContext)
    const { id, name, price, quantity, img } = producto.producto;

  return (
    <>
        <Flex 
            ml='8'
            mb='10'
            mr='8'
            p='8'
            direction={{ base: 'column', sm: 'column', md: 'row', lg: 'row' }}
            align='center'
            justify='space-between' 
            bg='black'
            color='white' 
        > 
            <Box align='center'>
                <Link to={`/detail/${id}`}>
                    <Heading>
                        {name}
                    </Heading>
                </Link>
                <Box>
                    <Text fontSize='md' color='#1DA1F2' pt={{ base: '3', sm: '3', md: '2', lg: '2' }}>
                        c/u : ${price}
                    </Text>
                </Box>
            </Box>
            <Box align='center' mb='3'>
                <Text fontSize='md' color='#1DA1F2' m={{ base: '4', sm: '4', md: '2', lg: '2' }}>Amount:</Text>
                 {quantity}
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
                            <Button 
                                leftIcon={<BsTrashFill/>} 
                                w='100px' 
                                colorScheme='twitter' 
                                borderRadius='full' 
                                onClick={()=> removeItem(id)}
                            >
                                Delete
                            </Button>
                        </Box>
                    </Flex>
            }    
        </Flex> 
        <Box ml='10' mr='10'>
            <Divider/>
        </Box>
    </>
  )
}

export default ItemCart