import React from 'react'
import { Flex, Box } from '@chakra-ui/react'
import CartWidget from './CartWidget'
/* import Buscador from '../Elements/Buscador'
import { AiFillHeart } from "react-icons/ai"; */
import { BsFillCartFill } from "react-icons/bs";
import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
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
        <Link to='/'>
          <Box fontSize='3xl' color='#1DA1F2' >
            PRO G
          </Box>
        </Link>
        <NavLink to='/category/placas'>Placas de video</NavLink>
        <NavLink to='/category/mothers'>Motherboards</NavLink>
        <NavLink to='/category/gabinetes'>Gabinetes</NavLink>
        <NavLink to='/category/perifericos' >Perifericos</NavLink>
        <Link to='/cart'>
          <CartWidget colorScheme='twitter' icon={<BsFillCartFill/>}/>
        </Link>
      </Flex>
    </>
    
  )
}

export default NavBar