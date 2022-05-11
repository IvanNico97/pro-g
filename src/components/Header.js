import React from 'react'
import { Flex, Text, Input, Box, Button } from '@chakra-ui/react'


const Header = () => {
  return (
    <>
    <Flex
    w='100%'
    direction='row'
    align='center'
    justify='space-between'
    pt='4'
    pb='4'
    color='white'
    bg='black'
    fontFamily='Roboto, sans-serif'
    >
    <Box pl='6' pr='10'>
        <Text fontSize='4xl' pl='4' color='#00acee'>PRO-G</Text>
    </Box>
    <Box p='' w='60%'>
        <Input variant='outline' placeholder='Buscar'></Input>
    </Box>
    <Box>
        <Button size='md' colorScheme='twitter'>Sing in</Button>
    </Box>
    <Box pr='4'>
        <Button size='md' colorScheme='twitter'>Register</Button>
    </Box>
    </Flex>
    </>
  )
}

export default Header