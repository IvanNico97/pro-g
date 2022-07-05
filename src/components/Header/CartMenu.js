import React from 'react'
import { Flex, Menu, Button,
  MenuButton,
  MenuList,
  MenuItem 
} from '@chakra-ui/react'
import { BsJustify } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

const CartMenu = () => {
  return (
    <Flex align="center">
      <Menu>
        <MenuButton
          as={BsJustify}
          icon={BsJustify}
        >
        asd
        </MenuButton>
        <MenuList>
          <MenuItem>
            <Link to='/category/Teclados'>
              <Button w='200px' colorScheme='twitter'>
                Teclados
              </Button>
            </Link>
          </MenuItem>
          <MenuItem>
            <Link to='/category/Auriculares'>
              <Button w='200px' colorScheme='twitter'>
                Auriculares
              </Button>
            </Link>
          </MenuItem>
          <MenuItem>
            <Link to='/category/Mouses'>
              <Button w='200px' colorScheme='twitter'>
                Mouses
              </Button>
            </Link>
          </MenuItem>
          <MenuItem>
            <Link to='/category/Pads'>
              <Button w='200px' colorScheme='twitter'>
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