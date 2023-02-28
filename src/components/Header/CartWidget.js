import React, { useContext } from 'react'
import { Flex, Box, Button } from '@chakra-ui/react'
import { CartContext } from '../../context/CartContext'


const CartWidget = ({icon, colorScheme, bg}) => {
  const {getQuantity} = useContext(CartContext)

  const quantity = getQuantity() 

  return (
    <>
      <Flex>
        <Button
          size='md'
          colorScheme={colorScheme}
          bg='#1DA1F2'
          /* bg={bg} */
          leftIcon={icon}
        >
          <Box>
            {quantity} 
          </Box> 
        </Button>
      </Flex>
    </>

  )
}

export default CartWidget