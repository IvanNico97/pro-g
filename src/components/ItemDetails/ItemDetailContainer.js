import React,{ useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import { callProduct } from '../Main/asyncmock'
import { useParams } from 'react-router-dom'
import { Flex, Spinner } from '@chakra-ui/react'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(true)
    const { productId } = useParams()

    useEffect (() => {
        setLoading(true)

        callProduct(productId)
          .then(response => { 
            setProduct(response)
          }).catch(error => {
            console.log(error)
          }).finally(() => {
            setLoading(false)
          })
    }, [productId])

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
          <ItemDetail {...product} />
        </>
    )
}

export default ItemDetailContainer