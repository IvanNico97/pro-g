import React, { useState } from 'react'
import { Flex, Box, Heading, Button} from '@chakra-ui/react'
import { useNavigate } from "react-router-dom";
import { useAuth } from '../../context/AuthContext'
import { BsGoogle } from "react-icons/bs";

const Login = () => {
    const [error, setError] = useState()
    const { loginWithGoogle } = useAuth()

    const navigate = useNavigate()


    const handleGoogleSignIn = async () => {
        try {
            await loginWithGoogle()
            navigate("/");
        } catch (error) {
            setError(error.message)
        }
    }

  return (
    <Flex
        m='10'
        p='10'
        direction='column'
        align='center'
        justify='center'
    >
        <Box m='8'>
            <Heading>Login for access</Heading>
        </Box>
        <Box m='8'>
            <Button colorScheme='twitter' w='auto' onClick={handleGoogleSignIn} leftIcon={<BsGoogle/>}>LOGIN</Button>
        </Box>
    </Flex>
  )
}

export default Login