import React, {useState} from 'react'
import { Box, Flex } from '@chakra-ui/react'
import Boton from './Boton'
import ButtonCount from './ButtonCount'
import InputCount from './InputCount'

const ItemCount = ({initial, stock, handleCount, setCount }) => {
  const [inputType, setInputType] = useState('input')
 
  const Count = inputType === 'input' ? InputCount : ButtonCount
    
  return (
    <>
      <Flex w='300px' mb='2' mt='2' align='center'>
        <Boton size='xs' w='auto' colorScheme='twitter' click={() => setInputType(inputType === 'input' ? 'button' : 'input' )}>
          Cambiar contador
        </Boton>
      </Flex>
      <Box w='auto'>
        <Count initial={initial} handleCount={handleCount} stock={stock}/>
        </Box>
    </>
  )
}

export default ItemCount