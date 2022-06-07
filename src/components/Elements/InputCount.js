import React, { useState } from 'react'
import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from '@chakra-ui/react'
import Boton from './Boton'


const InputCount = ({initial,stock, handleCount}) => {
  const [count, setCount] = useState (initial)
  
  const handleChange = (e) => {
    if (e.target.value <= stock ) {
      setCount(e.target.value)
    }
  } 

  console.log(count)

  return (
    <>
      <NumberInput w='300px' onChange={handleChange} defaultValue={count} min={initial} max={stock}>
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
      <Boton click={() => handleCount(count)} w='300px' mt='2' size='lg' color='#1DA1F2'>Agregar al carrito</Boton>
    </>
  )
}

export default InputCount