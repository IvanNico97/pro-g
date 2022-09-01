import React from 'react'
import { Flex, Box, Image } from '@chakra-ui/react';
import { Link } from "react-router-dom";
import { LOGO10 } from '../Imagenes/index'
import Social from './Social'
import Contactos from './Contactos'

const Footer = () => {
  return (
    <>
      <Flex
        h='100%'
        direction={{ base: 'column', sm: 'column', md: 'row', lg: 'row' }} 
        align='center'
        justify={{ base: 'center', sm: 'center', md: 'space-between', lg: 'space-between' }}
        color='white'
        bg='black'
        fontSize= '15px'
        fontFamily='Roboto, sans-serif'
      >
            <Box 
              pl='4' 
              pr='4' 
              ml='4' 
              mr='4'
            >
              <Link to='/'>
                <Image src={LOGO10} borderRadius='full' boxSize='130px' alt='logo'></Image>
              </Link>
            </Box>
            <Box 
              direction={{ base: 'column', sm: 'column', md: 'row', lg: 'row' }}
              w={{ base: '150px', sm: '200px', md: '300px', lg: '700px' }}
              justify='space-around'
              align='end'
            >
              <Contactos/>  
            </Box>
            <Box 
              pl='4' 
              pr='4' 
              ml='4' 
              mr='4' 
            >
              <Social/>
            </Box>
        </Flex>
    </>
  )
}

export default Footer