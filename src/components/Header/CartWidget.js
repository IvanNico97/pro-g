import React from 'react'
import { Flex, IconButton } from '@chakra-ui/react'



const CartWidget = ({icon, bg, align, color, colorScheme, mt,ml,mr}) => {

  return (
    <>
      <Flex
        align={align}
        borderRadius='8px'
        bg={bg} 
        mt={mt}
        mr={mr}
        ml={ml}
      >
        <IconButton
          align={align}
          size='lg'
          colorScheme={colorScheme}
          color={color}
          icon={icon}
        />
      </Flex>
    </>

  )
}

export default CartWidget