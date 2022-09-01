import React from 'react'
import { Flex, Box, Text } from '@chakra-ui/react';
import { Link } from "react-router-dom";
import "./Footer.css"

const Contactos = () => {
  return (
    <Flex 
      justify='space-around' 
      align='center'
      fontSize='13px'
    >
        <Box >
            <Link to='/nosotros'>
                <Text className='color-links'>Contacto</Text>
            </Link>
        </Box>
        <Box>
            <Link to='/nosotros'>
              <Text className='color-links'>Nosotros</Text>
            </Link>
        </Box>
        <Box>
            <Link to='/nosotros'>
              <Text className='color-links'>Bases y condiciones</Text>
            </Link>
        </Box>
        <Box> 
            <Link to='/nosotros'>
              <Text className='color-links'>Preguntas Frecuentes</Text>
            </Link>
        </Box>
    </Flex>
  )
}

export default Contactos