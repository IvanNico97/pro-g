import React, {useState } from 'react'
import { Flex, Button } from '@chakra-ui/react'
import ButtonCount from './ButtonCount'
import InputCount from './InputCount'

const ItemCount = ({initial, stock, handleCount}) => {
  const [inputType, setInputType] = useState('input')
  
 
  const Count = inputType === 'input' ? InputCount : ButtonCount
    
  return (
    <>
      <Flex mb='2'>
        <Button 
          size='xs' 
          w='200px' 
          colorScheme='twitter'
          borderRadius='8'
          onClick={() => setInputType(inputType === 'input' ? 'button' : 'input')}
        >
          Cambiar contador
        </Button>
      </Flex>
      <Flex direction='column' align='center'>
        <Count initial={initial} handleCount={handleCount} stock={stock}/>
      </Flex>
    </>
  )
}

export default ItemCount