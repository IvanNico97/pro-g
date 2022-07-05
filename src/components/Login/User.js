import React, { useState } from 'react'
import { useAuth } from '../../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import { 
    Flex,
    Box,
    Text,
    Button,
    Heading,
    Image,
    Menu,
    MenuButton,
    MenuList,
    MenuItem, 
    MenuDivider} from '@chakra-ui/react'
  import { Link } from "react-router-dom";
  import { BsFillCartFill, BsArrowRightSquareFill } from "react-icons/bs";

const User = () => {
  const [error, setError] = useState()

  const navigate = useNavigate()

  const { loginWithGoogle, logout, user } = useAuth()
 
  const handleGoogleSignIn = async () => {
    try {
      await loginWithGoogle()
      navigate("/");
    }catch (error) {
      setError(error.message)
    }
  }

  const handleLogout = async() => {
    try {
      await logout()
    } catch(error) {
      console.log(error)
    }
  }

  return (
    <>
      { !user ? 
        <Button colorScheme='twitter' onClick= {handleGoogleSignIn}>Login</Button> 
        :
        <Menu>
          <MenuButton>
            <Image borderRadius='full' boxSize='40px' src={user.photoURL} alt='photo' />
          </MenuButton>
          <MenuList>
            <MenuItem>
              <Flex direction='column' align='center' justify='center' m='2' color='#14171A'>
                <Heading pb='2' size='md' justify='center'>
                  {user.displayName}
                </Heading>
                <Text fontSize='sm' justify='center'>
                  {user.email}
                </Text>
              </Flex>
            </MenuItem>
            <MenuDivider/>
            <MenuItem>
              <Link to='/cart'>
                <Button leftIcon={<BsFillCartFill/>} w='200px' bg='#E1E8ED' color='#14171A'>
                  Cart
                </Button>
              </Link>   
            </MenuItem>
            <MenuItem>
              <Link to='login'>
                <Button w='200px' colorScheme='twitter' onClick={handleLogout} leftIcon={<BsArrowRightSquareFill/>}>Logout</Button> 
              </Link>
            </MenuItem>
          </MenuList>
        </Menu> 
      }
    </>
  )
}

export default User