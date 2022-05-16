import React from 'react'
import { Button } from '@chakra-ui/react'

const Boton = (props) => {
  return (
    <>
        <Button size='md' m={props.m} p={props.p} onClick={props.click} colorScheme='twitter'>{props.nombre}</Button>
    </>
  )
}

export default Boton