import React, { useContext } from 'react'
import { Flex, Box, Image } from '@chakra-ui/react'
import CartWidget from './CartWidget'
import { BsFillCartFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import {CartContext} from '../../context/CartContext'
import { LOGO6 } from '../Imagenes/index'
import User from './User'
import CartMenu from './CartMenu'

const NavBar = () => {

  const { getQuantity } = useContext(CartContext)
  const quantity = getQuantity()
  

  return (
    <>
      <Flex
        w='auto'
        h='auto'
        direction={{ base: 'column', sm: 'column', md: 'row', lg: 'row' }}
        align='center'
        justify='space-between'
        color='white'
        bg='#14171A'
        fontSize= '30px'
        fontFamily='Roboto, sans-serif'
      >
        <Box pl='4' ml='4'>
          <Link to='/'>
            <Image src={LOGO6} borderRadius='full' boxSize='130px' alt='logo'></Image>
          </Link>
        </Box>
        <Flex
          w={{ base: '100%', sm: '100%', md: 'auto', lg: 'auto' }}
          align='center' 
          justify={{ base: 'space-around', sm: 'space-around', md: 'space-around', lg: 'space-around' }}
        >
          <Box mr='2' mt='1' pr='2'>
            <CartMenu />
          </Box>
          <Box mr='2' pr='2'>
            { quantity > 0 &&
              <Link to='/cart'>
                <CartWidget bg='#14171A' icon={<BsFillCartFill/>}/>
              </Link>
            }
          </Box>
          <Box mr='4' mt='2' pr='4' >
            <User/>
          </Box>
        </Flex>
      </Flex>
    </>
  )
}

export default NavBar