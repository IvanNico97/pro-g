import React from 'react'
import { Flex, Box, Link, Button } from '@chakra-ui/react'
/* import { NavLink } from "react-router-dom";  */

const NavBar = () => {

  return (
    <>
    <Flex
        w='100%'
        direction='row'
        align='center'
        justify='space-around'
        color='white' 
        fontSize='15px'
        p='2'
        bg='black'
        fontFamily='Roboto, sans-serif'>
        <Box fontSize='35px' pl='5'>
            <Link>PRO-G</Link>
        </Box> 
        <Box>
            <Link>Placas de video</Link>
        </Box>
        <Box>
            <Link>Motherboards</Link>
        </Box>
        <Box>
            <Link>Gabinetes</Link>
        </Box>
        <Box>
            <Link>Perifericos</Link>
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

export default NavBar