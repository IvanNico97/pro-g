import React from 'react'
import { Button } from '@chakra-ui/react'

const Boton = (props) => {
  return (
    <>
        <Button 
          size={props.size}
          w={props.w}
          m={props.m}
          ml={props.ml} 
          mt={props.mt} 
          mr={props.mr}
          mb={props.mb}
          p={props.p}
          pt={props.pt} 
          onClick={props.click}
          type={props.type} 
          colorScheme={props.colorScheme}
          color={props.color}
          br={props.borderRadius}
        >
          {props.children}
        </Button>
    </>
  )
}

export default Boton