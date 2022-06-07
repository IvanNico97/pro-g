import React, { useState } from 'react'
import { Input } from '@chakra-ui/react'
import Boton from './Boton'


const InputCount = ({initial,stock, handleCount}) => {
  const [count, setCount] = useState (initial)
  
  const handleChange = (e) => {
    if (e.target.value <= stock ) 
    setCount(e.target.value)
  } 

  return (
    <>
      <Input w='300px' type='number' onChange={handleChange} value={count} initial={initial} stock={stock}/>
      <Boton click={() => handleCount(count)} w='300px' mt='2' size='lg' color='#1DA1F2'>Agregar al carrito</Boton>
    </>
  )
}

export default InputCount