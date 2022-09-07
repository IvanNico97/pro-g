import React from 'react'
import { 
  Flex,
  Box,
  Menu,
  Button,
  MenuButton,
  MenuList
} from '@chakra-ui/react'
import { BsJustify } from "react-icons/bs";
import { Link } from "react-router-dom";
import './CartMenu.css'


const CartMenu = () => {
  return (
    <Flex align="center" justify="center">
      <Menu>
        <MenuButton>
          <BsJustify/>
        </MenuButton>
        <MenuList border='none' bg='none' p='2'>
          <Box>
            <Link to='/productos'>
              <Button size='sm' ml='4' p='4' w='200px' className='style-button'>
                Todos los productos
              </Button>
            </Link>
          </Box>
          <Box>
            <Link to='/category/Teclados'>
              <Button size='sm' ml='4' p='4' w='200px' className='style-button'>
                Teclados
              </Button>
            </Link>
          </Box>
          <Box>
            <Link to='/category/Auriculares'>
              <Button size='sm' ml='4' p='4' w='200px' className='style-button'>
                Auriculares
              </Button>
            </Link>
          </Box>
          <Box>
            <Link to='/category/Mouses'>
              <Button size='sm' ml='4' p='4' w='200px' className='style-button'>
                Mouses
              </Button>
            </Link>
          </Box>
          <Box>
            <Link to='/category/Pads'>
              <Button size='sm' ml='4' p='4' w='200px' className='style-button'>
                Mouse Pads
              </Button>
            </Link>
          </Box>
        </MenuList>
      </Menu>
    </Flex>
  )
}

export default CartMenu