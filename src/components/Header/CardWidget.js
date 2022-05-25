import React from 'react'
import { Flex, IconButton } from '@chakra-ui/react'



const CardWidget = ({icon}) => {

  return (
    <>
      <Flex
      align='center'
      borderRadius='8px'
      bg='#1DA1F2'
      mr='2'
      ml='1'
      >
      <IconButton
        size='lg'
        colorScheme='twitter'
        icon={icon}/>
      {/* <Box as='button' pr='2'>5</Box> */}
      </Flex>
    </>

  )
}

export default CardWidget