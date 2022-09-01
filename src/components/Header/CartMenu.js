import React from 'react'
import { 
  Flex,
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
    <Flex align="center" justify="center" >
      <Menu>
        <MenuButton>
          <BsJustify/>
        </MenuButton>
        <MenuList border='none' bg='none' p='2'>
          <Link to='/products'>
            <Button size='sm' ml='4' p='4' w='200px' className='style-button'>
              Featured products
            </Button>
          </Link>
          <Link to='/category/Keyboards'>
            <Button size='sm' ml='4' p='4' w='200px' className='style-button'>
              Keyboards
            </Button>
          </Link>
          <Link to='/category/Headphones'>
            <Button size='sm' ml='4' p='4' w='200px' className='style-button'>
              Headphones
            </Button>
          </Link>
          <Link to='/category/Mouses'>
            <Button size='sm' ml='4' p='4' w='200px' className='style-button'>
              Mouses
            </Button>
          </Link>
          <Link to='/category/Pads'>
            <Button size='sm' ml='4' p='4' w='200px' className='style-button'>
              Mouse Pads
            </Button>
          </Link>
        </MenuList>
      </Menu>
    </Flex>
  )
}

export default CartMenu