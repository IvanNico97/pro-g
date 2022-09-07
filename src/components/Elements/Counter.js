import React, {useState } from 'react'
import { Flex, Box, Text, Button } from '@chakra-ui/react'

const Counter = ({ initial, stock, handleCount }) => {
    const [ count, setCount ] = useState(initial)

    const Sumar = () => {
        if (count < stock) {
        setCount( count + 1)
        }
    }

    const Restar = () => {
        if (count > 1) {
            setCount (count -1)
        }
    }

  return (
    <>
        <Flex 
            align='center'
            justify='center'
        >
            <Flex 
                direction='row'
                align='center'
            >
                <Box>
                    <Button size='md' bg='black' color='white' onClick={Sumar}>+</Button>
                </Box>
                <Box pl='5' pr='5' >
                    <Text>{count}</Text>
                </Box>
                <Box>
                    <Button size='md' bg='black' color='white' onClick={Restar}>-</Button>
                </Box>
            </Flex>
            {/* <Flex>
                    <Button 
                        onClick={() => handleCount(count)}  
                        mt='2' 
                        size='sm' 
                        bg='black'
                    >
                        Modificar cantidad
                    </Button>
                </Flex> */}
        </Flex>
    </>
  )
}

export default Counter