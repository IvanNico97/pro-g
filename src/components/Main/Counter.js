import React, {useState} from 'react'
import { Flex, Button } from '@chakra-ui/react'
import Boton from '../Header/Boton'

const Counter = ({initial, stock, m, nombre, onClick}) => {
    const [count, setCount] = useState(initial)

    const Sumar = () => {
        if ( count < stock ) {
        setCount ( count + 1)
        }
    }

    const Restar = () => {
        if ( count > initial ){
        setCount ( count - 1)
        }
    }

  return (
    <>
    <Flex 
    align="center"
    justify="center"
    >
        <Boton m='10' nombre='+' click={Sumar}/>
        <div>{count}</div>
        <Boton m='10' nombre='-' click={Restar}/>
    </Flex>
    </>
  )
}

export default Counter