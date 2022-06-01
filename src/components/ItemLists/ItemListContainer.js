import React, {useState, useEffect} from 'react'
import { Flex, Heading, Spinner } from '@chakra-ui/react'
import ItemList from './ItemList'
import { callProducts, callCategory } from '../Main/asyncmock'
import { useParams } from 'react-router-dom'
 
const ItemListContainer = ({greeting}) => {
  const [products, setProducts] = useState({})
  const [loading, setLoading] = useState(true)
  const { categoryName } = useParams()

  useEffect(() => {
    setLoading(true)
    
    if(!categoryName) {
      callProducts()
        .then(response => {
          setProducts(response)
        }).catch(error => {
          console.log(error)
        }).finally(() => {
          setLoading(false)
        })
    } else {
      callCategory(categoryName).then(response => {
        setProducts(response)
      }).catch(error => {
          console.log(error)
        }).finally(() => {
          setLoading(false)
        })
    }
  }, [categoryName])

  if(loading){
    return ( 
      <Flex h='500px' align='center' justify='center'>
        <Spinner
            thickness='4px'
            speed='1s'
            emptyColor='#E1E8ED'
            color='#1DA1F2'
            size='xl'
        />
      </Flex>
    )
  }

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
        <Heading align='center' size='4xl' m='10px' p='10px'>{greeting}</Heading>
        <Flex 
          wrap='wrap'
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