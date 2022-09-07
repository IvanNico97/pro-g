import React from 'react'
import { 
  Flex,
  Box,
  Text,
  Button
} from '@chakra-ui/react'
import { Link } from "react-router-dom";

const Promo = () => {
  return (
    <Flex 
        bgGradient= 'linear(347deg, rgba(46,46,70,1) 4%, rgba(0,0,0,1) 50%, rgba(46,46,70,1) 96%)' /* 'linear(270deg, rgba(3,3,4,1) 30%, rgba(46,46,70,0.9780287114845938) 50%, rgba(3,3,4,1) 70%)' */
        color='white' 
        w='95%' 
        h='200px'
        mt='10'
        align='center'
        justify='center'
        fontFamily='Roboto, sans-serif'
    >
        <Box 
            align='center'
            justify='center'
        >
            <Text fontSize='25px' m='4'>
                Comprá lo que quieras y recibilo gratis en tu casa
            </Text>
            <Link to='/productos'>
              <Button colorScheme='twitter' m='4'>
                  Ver productos
              </Button>
            </Link>
        </Box>
    </Flex>
  )
}

export default Promo