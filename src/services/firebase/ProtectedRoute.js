import React from 'react'
import { useAuth } from '../../context/AuthContext'
import { Navigate } from 'react-router-dom'
import { Flex, Spinner } from '@chakra-ui/react'

export const ProtectedRoute = ({children}) => {
  const {user, loading } = useAuth()

  if(loading) { 
    return ( 
      <Flex h='500px' align='center' justify='center'>
        <Spinner
            thickness='4px'
            speed='1s'
            emptyColor='#E1E8ED'
            color='#1DA1F2'
            size='xl'
        />
      </Flex>
    )
  }

  if(!user) return <Navigate to='/login'/>

  return (
    <>
      {children}
    </>
  )
}
