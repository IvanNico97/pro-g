import React, { useContext, useState } from 'react'
import ItemCart from './ItemCart'
import { Flex, Box, Heading } from '@chakra-ui/react'
import { CartContext } from '../../context/CartContext'
import Boton from '../Elements/Boton'
import { Link } from 'react-router-dom'
import { addDoc, collection, getDocs, query, where, documentId, writeBatch } from 'firebase/firestore'
import { db, collectionName } from '../../services/firebase/index'

const Cart = () => {
  const [ loading, setLoading ] = useState(false)
  const { cart, precioTotal, clearCart, cantidadProductos } = useContext (CartContext)


  const createOrder = () => {
    setLoading(true)
    const objOrder = {
      buyer: {
        name: 'Ivan Avila',
        email:'ivan@gmail.com',
        phone:'1138234493'
      },
      items: cart,
      total: precioTotal(),
    }

    const ids= cart.map(prod => prod.id)
    console.log(ids)

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
        console.log(error)
        if(error.type === 'out_of_stock') {
          alert('no hay stock')
        }
      }).finally(() => {
          setLoading(false)
      })
    }
      if(loading){
        return <h1>Generando Orden..</h1>
    }

  if(cantidadProductos() === 0) {
    return (
      <Flex direction='column' align='center' justify='center' m='100px'>
        <Heading>No hay productos en el carrito</Heading>
        <Box m='100px'>
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
      <Flex align='center' justify='center'>
        <Heading>Total a Pagar : ${precioTotal()}</Heading>
      </Flex>
      <Flex align='center' justify='center' m='10'>
        <Box p='8'>
          <Boton colorScheme='twitter' w='200px' click={()=> clearCart()}>Limpiar Carrito</Boton>
        </Box>
        <Box p='8'>
          <Boton click={createOrder} colorScheme='twitter' w='200px'>Generar orden</Boton>
        </Box>
      </Flex> 
    </>
  )
}

export default Cart