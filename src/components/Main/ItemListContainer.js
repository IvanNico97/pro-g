import React, {useState, useEffect} from 'react'
import { Flex, Heading } from '@chakra-ui/react'
import ItemList from './ItemList'
import { callProducts } from './asyncmock'
 
const ItemListContainer = ({greeting}) => {
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
        w='100%'
        h='100%'
        direction='column'
        align="center"
        justify="space-around"
        color='#14171A'
        fontFamily='Roboto, sans-serif'
      >
        <Heading size='3xl' m='10px' p='10px'>{greeting}</Heading>
        <Flex 
          direction='row'
          align="center"
          justify="center"
          w='100%'
          m='8'
        >
          <ItemList products={products} />
        </Flex>
      </Flex>
    </>
  )
}

export default ItemListContainer