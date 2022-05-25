import React from 'react'
import { Flex, InputGroup, InputRightElement, Input} from '@chakra-ui/react'
import { BsSearch } from "react-icons/bs";

const Buscador = () => {
  return (
    <>
      <Flex
        w='100%'
        mr='6'
        p='1'>
        <InputGroup>
            <InputRightElement 
            children={<button>{<BsSearch color='white'/>}</button>}
            />
            <Input placeholder='Buscar producto' />
        </InputGroup>
      </Flex>
    </>
  )
}

export default Buscador