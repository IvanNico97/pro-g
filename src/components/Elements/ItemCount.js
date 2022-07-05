import React, {useState } from 'react'
import { Flex } from '@chakra-ui/react'
import Boton from './Boton'
import ButtonCount from './ButtonCount'
import InputCount from './InputCount'

const ItemCount = ({initial, stock, handleCount}) => {
  const [inputType, setInputType] = useState('input')
  
 
  const Count = inputType === 'input' ? InputCount : ButtonCount
    
  return (
    <>
      <Flex mb='2'>
        <Boton size='xs' w='200px' colorScheme='twitter' click={() => setInputType(inputType === 'input' ? 'button' : 'input' )}>
          Cambiar contador
        </Boton>
      </Flex>
      <Flex direction='column' align='center'>
        <Count initial={initial} handleCount={handleCount} stock={stock}/>
      </Flex>
    </>
  )
}

export default ItemCount