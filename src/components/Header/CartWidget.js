import React, { useContext } from 'react'
import { Flex, Box, Button } from '@chakra-ui/react'
import { CartContext } from '../../context/CartContext'


const CartWidget = ({icon, bg, align, color, colorScheme, mt,ml,mr}) => {
  const {getQuantity} = useContext(CartContext)

  const quantity = getQuantity() 

  return (
    <>
      <Flex
        align={align}
        borderRadius='6'
        bg={bg} 
        mt={mt}
        mr={mr}
        ml={ml}
      >
        <Button
          align={align}
          size='md'
          colorScheme={colorScheme}
          color={color}
          leftIcon={icon}
        >
          <Box ml='1'>
            {quantity} 
          </Box> 
        </Button>
      </Flex>
    </>

  )
}

export default CartWidget