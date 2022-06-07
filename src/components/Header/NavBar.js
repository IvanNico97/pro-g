import React from 'react'
import { Flex, Box } from '@chakra-ui/react'
import CartWidget from './CartWidget'
import Buscador from '../Elements/Buscador'
import { AiFillHeart } from "react-icons/ai";
import { BsFillCartFill } from "react-icons/bs";
import { NavLink, Link } from "react-router-dom";

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
        <Link to='/'>
          <Box  ml='6' pr='10' pl='4' w='200px' fontSize='3xl' color='#1DA1F2' >
            PRO G
          </Box>
        </Link>
        <Box w='100%' display='flex'>
            <Box mr='8'>
                <NavLink to='/category/placas'>Placas de video</NavLink>
            </Box>
            <Box mr='8'>
                <NavLink to='/category/mothers'>Motherboards</NavLink>
            </Box>
            <Box mr='8'>
                <NavLink to='/category/gabinetes'>Gabinetes</NavLink>
            </Box>
            <Box mr='8'>
                <NavLink to='/category/perifericos' >Perifericos</NavLink>
            </Box>
        </Box>
        <Buscador/>
        <Link to='/favoritos'>
          <CartWidget ml='1' mr='2' colorScheme='twitter' icon={<AiFillHeart/>}/>
        </Link>
        <Link to='/cart'>
          <CartWidget ml='1' mr='2' colorScheme='twitter' icon={<BsFillCartFill/>}/>
        </Link>
    </Flex>
    </>
    
  )
}

export default NavBar