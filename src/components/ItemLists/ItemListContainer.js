import React, {useState, useEffect} from 'react'
import { Flex, Heading, Spinner } from '@chakra-ui/react'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'
import { getProducts } from '../../services/firebase/firestore'
/* import { getDocs, collection, query, where } from 'firebase/firestore'
import { db } from '../../services/firebase/index' */
 
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
    /* const collectionRef = categoryId 
      ? query(collection(db, 'products'), where('category', '==', categoryId))
      : collection(db, 'products')

    getDocs(collectionRef).then(response => {
      const products = response.docs.map(doc => {
        return { id: doc.id, ...doc.data()}
      })
      setProducts(products)
     }).catch(error => {
          console.log(error)
      }).finally(() => {
          setLoading(false)
      }) */
    }, [categoryId])

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
        w='auto'
        h='100%'
        direction='column'
        color='#14171A'
        fontFamily='Roboto, sans-serif'
      >
      {
        categoryId ?
        <Heading align='center' size='2xl' m='8' p='6'>{categoryId}</Heading> 
        : 
        <Heading as='u' align='center' size='2xl' m='8' p='6'>{greeting}</Heading>
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