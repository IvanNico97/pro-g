import React from 'react'
import { Flex, Box, IconButton} from '@chakra-ui/react'
import { BsCart2 } from "react-icons/bs";


const CardWidget = ({count}) => {

  return (
    <>
    <Flex
    align='center'
    borderRadius='8px'
    bg='#1DA1F2'
    mr='6'
    >
     <IconButton
      size='lg'
      colorScheme='twitter'
      icon={<BsCart2/>}/>
    <Box as='button' pr='2'>5</Box>
    </Flex>
    </>

  )
}

export default CardWidget