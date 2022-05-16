import React from 'react'
import { Flex } from '@chakra-ui/react'
import Counter from './Counter'

const ItemListContainer = (props) => {
  return (
    <>
    <Flex
    m='100px'
    direction='column'
    justify="center"
    align="center">
      <h1>{props.greeting}</h1>
      <Counter 
      initial={1}
      stock={10}
      />
    </Flex>
    </>
  )
}

export default ItemListContainer