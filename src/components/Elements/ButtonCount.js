import React, {useState} from 'react'
import { Flex, Box, Text, Button } from '@chakra-ui/react'

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
    
    return (
        <>
            <Flex
                direction='column'
                align='center'
                justify='center' 
            >
                <Flex 
                    direction='row'
                    align='center'
                >
                    <Box>
                        <Button size='xs' onClick={Suma}>+</Button>
                    </Box>
                    <Box p='5'>
                        <Text>{count} unidades </Text>
                    </Box>
                    <Box>
                        <Button size='xs' onClick={Resta}>-</Button>
                    </Box>
                </Flex>
                <Flex>
                    <Button onClick={() => handleCount(count)} w='auto' mt='2' size='lg' colorScheme='twitter'>Agregar al carrito</Button>
                </Flex>
            </Flex>
        </>
    )
}
export default ButtonCount