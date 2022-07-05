import React, { useContext, useState } from 'react'
import ItemCart from './ItemCart'
import { Flex, Box, Heading, Text, Spinner, useToast  } from '@chakra-ui/react'
import { CartContext } from '../../context/CartContext'
import Boton from '../Elements/Boton'
import { Link } from 'react-router-dom'
import { addDoc, collection, getDocs, query, where, documentId, writeBatch } from 'firebase/firestore'
import { db, collectionName } from '../../services/firebase/index'
import { useAuth } from '../../context/AuthContext'

const Cart = () => {
  const [ loading, setLoading ] = useState(false)
  const { cart, precioTotal, clearCart, cantidadProductos } = useContext (CartContext)
  const { user } = useAuth()
  const toast = useToast()


  const createOrder = () => {
    setLoading(true)
    const objOrder = {
      buyer: {
        name: user.displayName,
        email:user.email,
        phone:user.phoneNumber,
      },
      items: cart,
      total: precioTotal(),
    }

    const ids= cart.map(prod => prod.id)

    const outOfStock = []

    const batch = writeBatch(db)

    const collectionRef = collection(db, collectionName.products)

    getDocs(query(collectionRef, where(documentId(), 'in' , ids)))
      .then(response => { 
        response.docs.forEach(doc => {
        const dataDoc = doc.data()

        const prodQuantity = cart.find(prod => prod.id === doc.id)?.quantity 

        if(dataDoc.stock >= prodQuantity) {
            batch.update(doc.ref, { stock: dataDoc.stock - prodQuantity}  )
        } else {
          outOfStock.push({ id: doc.id, ...dataDoc})
        }
      })
      }).then(() => {
        if(outOfStock.length === 0) {
          const collectionRef = collection(db, collectionName.orders)
          return addDoc(collectionRef, objOrder)
        } else {
          return Promise.reject({ type : 'out_of_stock', products: outOfStock })
        }
      }).then(({ id }) => {
        batch.commit()
        console.log(`el id de la orden es: ${id}`)
        clearCart()
      }).catch(error => {
          if(error.type === 'out_of_stock') {
            toast({
              title: 'Próximamente.',
              description: "El producto no cuenta con stock en este momento.",
              status: 'error',
              duration: 5000,
              isClosable: true,
            })
        }
      }).finally(() => {
          setLoading(false)
      })
    }
      
    if(loading){
      return (
        <Flex h='500px' direction ='column' align='center' justify='center'>
          <Heading>Cargando orden</Heading>
          <Spinner
            m='10'
            thickness='4px'
            speed='1s'
            emptyColor='#E1E8ED'
            color='#1DA1F2'
            size='xl'
          />
        </Flex>
      )
    }

  if(cantidadProductos() === 0) {
    return (
      <Flex direction='column' align='center' justify='center' m='100px'>
        <Heading>Tu carrito está vacío</Heading>
          <Text pt='5'>¡Nuestros productos te esperan!</Text>
        <Box m='70px'>
          <Link to='/'>
            <Boton colorScheme='twitter' size='lg'>Continue Comprando</Boton>
          </Link>
        </Box>
      </Flex>
    )
  }

  return (
    <>
      <Flex justify='center' align='center'>
        <Heading size='3xl' m='10'>Carrito</Heading>
      </Flex>
      { 
        cart.map(productos => <ItemCart key={productos.id} {...productos}/>)
      }
      <Box w='auto' align='center' justify='center'>
        <Heading size='2xl' m={{ base: '8', sm: '8', md: '10', lg: '10' }}>Total a Pagar: ${precioTotal()}</Heading>
      </Box>
      <Flex direction={{ base: 'column', sm: 'column', md: 'row', lg: 'row' }} align='center' justify='center' m='2' mb='8'>
        <Box p='8'>
          <Boton colorScheme='twitter' w='200px' click={()=> clearCart()}>Limpiar Carrito</Boton>
        </Box>
        <Box>
          <Boton click={createOrder} colorScheme='twitter' w='200px'>Generar orden</Boton>
        </Box>
      </Flex> 
    </>
  )
}

export default Cart