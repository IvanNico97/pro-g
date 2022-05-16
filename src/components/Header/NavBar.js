import React from 'react'
import { Flex, Box, Text, Link} from '@chakra-ui/react'
import CardWidget from './CardWidget'
import Boton from './Boton'
import Buscador from './Buscador'

const NavBar = ({nombre, p, m}) => {
  return (
    <>
    <Flex
    w='100%'
    direction='row'
    align='center'
    justify='space-around'
    pt='4'
    pb='4'
    color='white'
    bg='#14171A'
    fontSize= '15px'
    fontFamily='Roboto, sans-serif'
    >
        <Box ml='6' pr='10' w='25%'>
          <Text fontSize='2xl' pl='4' color='#1DA1F2'><big>PRO G</big></Text>
        </Box>
        <Box w='100%' display='flex'>
            <Box mr='8'>
                <Link>Placas de video</Link>
            </Box>
            <Box mr='8'>
                <Link>Motherboards</Link>
            </Box>
            <Box mr='8'>
                <Link>Gabinetes</Link>
            </Box>
            <Box mr='8'>
                <Link>Perifericos</Link>
            </Box>
        </Box>
        <Buscador/>
        <Boton p='6' m='3' nombre='Favoritos'/>
        <CardWidget />
    </Flex>
    </>
    
  )
}

export default NavBar