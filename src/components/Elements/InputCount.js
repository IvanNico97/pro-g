import React, { useState } from 'react'
import { Flex, Input, Button } from '@chakra-ui/react'

const InputCount = ({initial,stock, handleCount}) => {
  const [count, setCount] = useState (initial)
  
  const handleChange = (e) => {
    if (e.target.value <= stock ) 
    setCount(e.target.value)
  } 

  return (
    <>
      <Flex direction='column'>
        <Input 
          type='number' 
          w='200px'
          color='white'
          border='2px'
          borderRadius='full'
          onChange={handleChange} 
          value={count} 
          initial={initial} 
          stock={stock}
        />
        <Button 
          onClick={() => handleCount(count)} 
          mt='2' 
          w='200px' 
          size='lg' 
          colorScheme='twitter'
          borderRadius='full'
        >
          Añadir al carrito
        </Button>
      </Flex>
    </>
  )
}

export default InputCount