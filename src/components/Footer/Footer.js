import React from 'react'
import { Flex, Box, Image} from '@chakra-ui/react';
import { Link } from "react-router-dom";
import { LOGO6 } from '../Imagenes/index'


const Footer = () => {
  return (
    <>
      <Flex
        w='100%'
        mb='full'
        direction='row'
        align='center'
        justify='space-between'
        pb='4'
        color='white'
        bg='#14171A'
        fontSize= '15px'
        fontFamily='Roboto, sans-serif'
        >
          <Box pl='4' ml='4'>
            <Link to='/'>
              <Image src={LOGO6} borderRadius='full' boxSize='130px' alt='logo'></Image>
            </Link>
          </Box>   
        </Flex>
    </>
  )
}

export default Footer