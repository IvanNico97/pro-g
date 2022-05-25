import React, {useState, useEffect} from 'react'
import { Flex } from '@chakra-ui/react'
import ItemList from './ItemList'
import { callProducts } from './asyncmock'
 
const ItemListContainer = (props,{greeting}) => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    callProducts()
      .then(response => {
        setProducts(response)
      })
  }, [])


  return (
    <>
      <Flex
        m='10px'
        p='15px'
        w='100%'
        h='100%'
        direction='row'
        align="center"
        justify="space-around"
        color='#14171A'
        fontFamily='Roboto, sans-serif'
      >
        <h1>{greeting}</h1>
        <ItemList products={products} />
      </Flex>
    </>
  )
}

export default ItemListContainer