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
                        <Button size='md' color='white' bg='black' onClick={Suma}>+</Button>
                    </Box>
                    <Box pl='5' pr='5' color='white'>
                        <Text>{count}</Text>
                    </Box>
                    <Box>
                        <Button size='md' color='white' bg='black' onClick={Resta}>-</Button>
                    </Box>
                </Flex>
                <Flex>
                    <Button 
                        onClick={() => handleCount(count)} 
                        w='200px' 
                        mt='2' 
                        size='lg' 
                        colorScheme='twitter'
                        borderRadius='full'
                    >
                        Añadir al carrito
                    </Button>
                </Flex>
            </Flex>
        </>
    )
}

export default ButtonCount