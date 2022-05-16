import React from 'react'
import { InputGroup, InputRightElement, Input} from '@chakra-ui/react'
import { BsSearch } from "react-icons/bs";

const Buscador = () => {
  return (
    <>
        <InputGroup>
            <InputRightElement 
            children={<button>{<BsSearch color='white'/>}</button>}
            />
            <Input placeholder='Buscar producto' />
        </InputGroup>
    </>
  )
}

export default Buscador