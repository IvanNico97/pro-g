import React from 'react'
import { Button } from '@chakra-ui/react'

const Boton = (props) => {
  return (
    <>
        <Button 
        size='md' 
        m={props.m}
        ml={props.ml} 
        mt={props.mt} 
        mr={props.mr}
        mb={props.mb}
        p={props.p}
        pt={props.pt} 
        onClick={props.click} 
        colorScheme='twitter'
        >
        {props.children}
        </Button>
    </>
  )
}

export default Boton