import React, {useState} from 'react'
import { Flex, Box } from '@chakra-ui/react'
import Boton from '../Header/Boton'

const Counter = ({initial, stock, m, nombre, onClick}) => {
    const [count, setCount] = useState(initial)

    const Increment = () => {
        if ( count < stock ) {
        setCount ( count + 1)
        }
    }

    const Decrement = () => {
        if ( count > initial ){
        setCount ( count - 1)
        }
    }

  return (
    <>
    <Flex
    direction='row'
    align="center"
    justify="center"
    >
      <Boton m='8' click={Increment}>+</Boton>
      <Box>{count}</Box>
      <Boton m='8' click={Decrement}>-</Boton>
    </Flex>
    </>
  )
}

export default Counter