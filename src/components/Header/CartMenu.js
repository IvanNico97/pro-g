import React from 'react'
import { 
  Flex,
  Menu,
  Button,
  MenuButton,
  MenuList,
  MenuItem
} from '@chakra-ui/react'
import { BsJustify } from "react-icons/bs";
import { Link } from "react-router-dom";


const CartMenu = () => {
  return (
    <Flex align="center" justify="center" >
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Audiowide&display=swap');
    </style> 
      <Menu>
        <MenuButton>
          <BsJustify/>
        </MenuButton>
        <MenuList border='none' bg='none' fontFamily="Audiowide">
          <MenuItem>
            <Link to='/products'>
              <Button size='sm' colorScheme='gray' color='black' w='200px'>
                Featured products
              </Button>
            </Link>
          </MenuItem>
          <MenuItem>
            <Link to='/category/Keyboards'>
              <Button size='sm' colorScheme='gray' color='black' w='200px'>
                Keyboards
              </Button>
            </Link>
          </MenuItem>
          <MenuItem>
            <Link to='/category/Headphones'>
              <Button size='sm' colorScheme='gray' color='black' w='200px'>
                Headphones
              </Button>
            </Link>
          </MenuItem>
          <MenuItem>
            <Link to='/category/Mouses'>
              <Button size='sm' colorScheme='gray' color='black' w='200px'>
                Mouses
              </Button>
            </Link>
          </MenuItem>
          <MenuItem>
            <Link to='/category/Pads'>
              <Button size='sm' colorScheme='gray' color='black' w='200px'>
                Mouse Pads
              </Button>
            </Link>
          </MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  )
}

export default CartMenu