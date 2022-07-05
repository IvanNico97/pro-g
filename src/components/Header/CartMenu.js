import React from 'react'
import { Flex, Menu, Button,
  MenuButton,
  MenuList,
  MenuItem, 
  MenuDivider
} from '@chakra-ui/react'
import { BsJustify } from "react-icons/bs";
import { Link } from "react-router-dom";

const CartMenu = () => {
  return (
    <Flex align="center">
      <Menu>
        <MenuButton>
          <BsJustify />
        </MenuButton>
        <MenuList>
          <MenuItem>
            <Link to='/category/Teclados'>
              <Button w='200px' bg='#E1E8ED' color='#14171A' >
                Teclados
              </Button>
            </Link>
          </MenuItem>
          <MenuDivider/>
          <MenuItem>
            <Link to='/category/Auriculares'>
              <Button w='200px' bg='#E1E8ED' color='#14171A'>
                Auriculares
              </Button>
            </Link>
          </MenuItem>
          <MenuDivider/>
          <MenuItem>
            <Link to='/category/Mouses'>
              <Button w='200px' bg='#E1E8ED' color='#14171A'>
                Mouses
              </Button>
            </Link>
          </MenuItem>
          <MenuDivider/>
          <MenuItem>
            <Link to='/category/Pads'>
              <Button w='200px' bg='#E1E8ED' color='#14171A'>
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