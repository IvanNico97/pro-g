import React from 'react'
import { Flex, Box, Heading } from '@chakra-ui/react'
import ItemCart from '../Carrito/ItemCart';

const Order = ({ order }) => {
   
  return (
    <>  
      <Flex direction="column" mt='8'>
        <Box ml='6' p='2' w={{ base: '270px', sm: '270px', md: '300px', lg: '300px' }} align='center'>
          <Heading size='1xl' bg='#E1E8ED' color='#14171A'>Nro orden: {order.id}</Heading>
        </Box>
        {
            order.items && order.items.map((item) => 
                <ItemCart 
                    key={item.id} 
                    producto={item} 
                    isOrder={true} 
                />
            )
        }
      </Flex>
    </>
  )
}

export default Order