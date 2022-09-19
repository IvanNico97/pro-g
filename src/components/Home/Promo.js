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
        bg='black'
        color='white' 
        w='100%'
        h='100%'
        p='10'
        align='center'
        justify='center'
        fontFamily='Roboto, sans-serif'
    >
        <Box 
            align='center'
            justify='center'
        >
            <Text fontSize='30px' pt='6' mt='6'>
                COMPRÁ LO QUE QUIERAS Y RECIBILO EN TU CASA
            </Text>
            <Link to='/productos'>
              <Button colorScheme='twitter' p='4' mt='6'>
                  Ver productos
              </Button>
            </Link>
        </Box>
    </Flex>
  )
}

export default Promo