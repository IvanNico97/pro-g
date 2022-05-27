import React from 'react'
import { Flex, IconButton } from '@chakra-ui/react'



const CardWidget = ({icon, bg, align, color, colorScheme, mt,ml,mr}) => {

  return (
    <>
      <Flex
      align={align}
      borderRadius='8px'
      bg={bg} /* #14171A, '#1DA1F2' */ 
      mt={mt}
      mr={mr}
      ml={ml}
      >
      <IconButton
        align={align}
        size='lg'
        colorScheme={colorScheme}
        color={color}
        icon={icon}/>
      {/* <Box as='button' pr='2'>5</Box> */}
      </Flex>
    </>

  )
}

export default CardWidget