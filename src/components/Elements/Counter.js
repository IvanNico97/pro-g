import React, {useState} from 'react'
import { Flex, Box, Text } from '@chakra-ui/react'
import Boton from './Boton'

const Counter = ({initial, stock, justify, align}) => {
    const [counter, setCounter] = useState(initial)

    const Suma = () => {
        if ( counter < stock) {
            setCounter (counter + 1)
        }
    }

    const Resta = () => {
        if(counter > initial) {
            setCounter ( counter - 1)
        }
    }

    return (
        <>
            <Flex
                align={align}
                justify={justify}
            >
                <Box p='5'>
                    <Boton colorScheme='twitter' size='xs' click={Suma}>+</Boton>
                </Box>
                <Box>
                    <Text>{counter} unidades </Text>
                </Box>
                <Box p='5'>
                    <Boton colorScheme='twitter' size='xs' click={Resta}>-</Boton>
                </Box>
            </Flex>
        </>
    )
}

export default Counter