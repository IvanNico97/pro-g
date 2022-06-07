import React, {useState} from 'react'
import { Flex, Box, Text } from '@chakra-ui/react'
import Boton from './Boton'
/* import { Link } from 'react-router-dom' */

const ButtonCount = ({initial, stock, handleCount }) => {
    const [count, setCount] = useState(initial)

    const Suma = () => {
        if ( count < stock) {
            setCount (count + 1)
        }
    }

    const Resta = () => {
        if(count > initial) {
            setCount ( count - 1)
        }
    }

    console.log(count)
    
    return (
        <>
            <Flex
                direction='column'
                align='center'
                justify='center' 
            >
                <Flex direction='row'>
                    <Box p='5'>
                        <Boton colorScheme='twitter' size='xs' click={Suma}>+</Boton>
                    </Box>
                    <Box p='5'>
                        <Text>{count} unidades </Text>
                    </Box>
                    <Box p='5'>
                        <Boton colorScheme='twitter' size='xs' click={Resta}>-</Boton>
                    </Box>
                </Flex>
                <Flex>
                    <Boton click={() => handleCount(count)} w='300px' mt='2' size='lg' color='#1DA1F2'>Agregar al carrito</Boton>
                </Flex>
            </Flex>
        </>
    )
}
export default ButtonCount