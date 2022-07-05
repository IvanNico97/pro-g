import React, { useState } from 'react'
import { Flex, Box, Heading} from '@chakra-ui/react'
import Boton from '../Elements/Boton'
import { useNavigate } from "react-router-dom";
import { useAuth } from '../../context/AuthContext'

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
        <Box m='8' w='200px'>
            <Boton colorScheme='twitter' w='200px' click={handleGoogleSignIn}>Login</Boton>
        </Box>
    </Flex>
  )
}

export default Login