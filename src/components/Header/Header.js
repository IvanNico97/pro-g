import React from 'react'
import { Flex, Text, Box} from '@chakra-ui/react'
import NavBar from './NavBar'
import Boton from './Boton'
import Buscador from './Buscador'
import CardWidget from './CardWidget'


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
    bg='#14171A'
    fontFamily='Roboto, sans-serif'
    >
      <Box ml='6' pr='6' w='25%'>
          <Text fontSize='2xl' pl='4' color='#1DA1F2'><big>PRO G</big></Text>
      </Box>
      <NavBar/>
      <Buscador/>
      <Boton p='6' m='4'>Favoritos</Boton>
      <CardWidget/>
    </Flex>
    </>
  )
}

export default Header