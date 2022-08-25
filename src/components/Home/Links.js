import React from 'react'
import { Flex, Box, Heading } from '@chakra-ui/react'
import CardLinks from './CardLinks'

const Links = (props) => {
  return (
    <>
      <Flex w='100%' direction='column' bg='black' color='white'>
        <Box align="center">
          <Heading mt='10' mb='60px'>Our products</Heading>
        </Box>
        <CardLinks />
      </Flex>
    </>
  )
}

export default Links