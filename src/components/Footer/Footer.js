import React from 'react'
import { Flex, Box, Image, Button} from '@chakra-ui/react';
import { Link } from "react-router-dom";
import { LOGO6 } from '../Imagenes/index'
import { BsFacebook, BsTwitter, BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <Flex
        w='100%'
        mb='full'
        direction={{ base: 'column', sm: 'column', md: 'row', lg: 'row' }}
        align='center'
        justify={{ base: 'center', sm: 'center', md: 'space-between', lg: 'space-between' }}
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
          <Flex mr='4' pr='4' direction='column' align='center'>
            <Box pr='8' pb='2'>
              NOSOTROS
            </Box>
            <Flex direction='row'>
              <Link to='/nosotros'>
                <Box pr='4'>
                  {<BsFacebook/>}
                </Box>
              </Link>
              <Link to='/nosotros'>
                <Box pr='4'>
                  {<BsTwitter/>}
                </Box>
              </Link>
              <Link to='/nosotros'>
                <Box pr='4'>
                  {<BsLinkedin/>}
                </Box>
              </Link>
            </Flex>
          </Flex>
        </Flex>
    </>
  )
}

export default Footer