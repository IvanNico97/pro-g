import React, { useState } from 'react'
import { useAuth } from '../../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import { 
    Box,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Avatar
  } from '@chakra-ui/react'
  import { Link } from "react-router-dom";
  import { BsFillCartFill, BsArrowRightSquareFill, BsFillPersonFill } from "react-icons/bs";

const User = () => {
  const [error, setError] = useState()

  const navigate = useNavigate()

  const { loginWithGoogle, logout, user } = useAuth()
  console.log(user)
 
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
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Audiowide&display=swap');
      </style> 
      { !user ?
        <Box mb='2' justify='center'>
          <Button bg='black' boxSize='40px' onClick= {handleGoogleSignIn}>
            <Avatar borderRadius='full' boxSize='40px' />
          </Button> 
        </Box> 
        :
        <Menu>
          <MenuButton>
            <Avatar borderRadius='full' boxSize='40px' name={user.displayName} src={user.photoURL} />
          </MenuButton>
          <MenuList bg='none' border='none' fontFamily="Audiowide">
            <MenuItem>
              <Link to='/cart'>
                <Button size='sm' leftIcon={<BsFillCartFill/>} w='200px' colorScheme='gray' color='black'>
                  Cart
                </Button>
              </Link>   
            </MenuItem>
            <MenuItem>
              <Link to='/login'>
                <Button
                  size='sm'
                  w='200px' 
                  colorScheme='gray' 
                  color='black'
                  onClick={handleLogout} 
                  leftIcon={<BsArrowRightSquareFill/>}
                >
                  Logout
                </Button> 
              </Link>
            </MenuItem>
          </MenuList>
        </Menu> 
      }
    </>
  )
}

export default User