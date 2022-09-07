import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Flex, Box, Heading, Button, Divider, Image } from '@chakra-ui/react'
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
            justify='space-around' 
            bg='black' 
            color='white'  
        > 
            <Box boxSize='110px'>
                <Image src={img} />
            </Box>
            <Box align='center'>
                <Link to={`/detail/${id}`}>
                    <Heading>
                        {name}
                    </Heading>
                </Link>
            </Box>
            <Box>
                <Heading>
                    $ {price * quantity}
                </Heading>
            </Box>
            {
                !producto.isOrder && 
                    <Flex direction='column'>
                        <Box mb='3' pt='4'>
                            <Button 
                                /* colorScheme='twitter'  */
                                bg='red'
                                color='white'
                                borderRadius='8' 
                                onClick={()=> removeItem(id)}
                            >
                                {<BsTrashFill/>}
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