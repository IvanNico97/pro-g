import React, {useState, useEffect} from 'react'
import { 
  Flex, 
  Heading,
  Spinner,
  Box 
} from '@chakra-ui/react'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'
import { getProducts } from '../../services/firebase/firestore'
 
const ItemListContainer = ({greeting}) => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const { categoryId } = useParams()


  useEffect(() => {
    setLoading(true)
    getProducts(categoryId)
    .then(response => {
      setProducts(response)
    }).catch(error => {
      console.log(error)
    }).finally(() => {
      setLoading(false)
    })
  }, [categoryId])

  if(loading){
    return ( 
      <Flex h='500px' align='center' justify='center' bg='black' color='white'>
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
        w='auto'
        h='100%'
        direction='column'
        color='#14171A'
        fontFamily='Roboto, sans-serif'
        bg='black'
      >
      {
        categoryId ?
        <Box w='100%' align='center'>
          <Heading 
            color='white' 
            w='250px' 
            align='center' 
            size='md' 
            p='6' 
            m='8'
          >
            {categoryId}
          </Heading> 
        </Box>
        :
        <Box w='100%' align='center'>
          <Heading
            color='white' 
            w={{ base: '250px', sm: '250px', md: '300px', lg: '300px' }} 
            align='center' 
            size='md' 
            p='6' 
            m='8'
            >
            {greeting}
          </Heading>
        </Box>
      }
        <Flex 
          wrap='wrap'
          justify="center"
        >
          <ItemList products={products} />
        </Flex>
      </Flex>
    </>
  )
}

export default ItemListContainer