import React, { useState } from 'react'
import { Flex, Box, Heading, Button} from '@chakra-ui/react'
import { useNavigate } from "react-router-dom";
import { useAuth } from '../../context/AuthContext'
import { BsFillPersonFill } from "react-icons/bs";

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
        p='10'
        h='500px'
        direction='column'
        align='center'
        justify='center'
        bg='black'
        color='white'
    >
        <Box m='8'>
            <Heading>Registrarse para continuar</Heading>
        </Box>
        <Box m='8'>
            <Button 
                colorScheme='twitter' 
                w='auto' 
                borderRadius='8' 
                onClick={handleGoogleSignIn} 
                leftIcon={<BsFillPersonFill/>}
            >
                Registro
            </Button>
        </Box>
    </Flex>
  )
}

export default Login