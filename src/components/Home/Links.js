import React from 'react'
import { Flex, Box, Heading } from '@chakra-ui/react'
import CardLinks from './CardLinks'

const Links = (props) => {
  return (
    <>
      <Flex 
        w='100%' 
        direction='column' 
        bg='white' 
        color='black'
        mb='10'
        pb='10'
      >
        <Box align="center">
          <Heading mt='8' mb='40px' fontSize='30px'>PRODUCTOS POR CATEGORÍAS</Heading>
        </Box>
        <CardLinks/>
      </Flex>
    </>
  )
}

export default Links