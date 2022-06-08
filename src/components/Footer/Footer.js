import React from 'react'
import { Box, Flex} from '@chakra-ui/react';
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <>
      <Flex
        w='100%'
        direction='row'
        align='center'
        pt='4'
        pb='4'
        color='white'
        bg='#14171A'
        fontSize= '15px'
        fontFamily='Roboto, sans-serif'
        >
            <Link to='/'>
                <Box  ml='10' pl='8' w='200px' fontSize='3xl' color='#1DA1F2' >
                    PRO G
                </Box>
            </Link>   
        </Flex>
    </>
  )
}

export default Footer