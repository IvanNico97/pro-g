import React, { useContext, useState } from 'react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  useDisclosure,
  Button,
  Flex,
  Box,
  useToast,
  Heading
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import { CartContext } from '../../context/CartContext'
import { addDoc, collection, getDocs, query, where, documentId, writeBatch } from 'firebase/firestore'
import { db, collectionName } from '../../services/firebase/index'
import { BsFillCaretLeftFill, BsFillCaretRightFill } from "react-icons/bs";
import './CartModal.css'


const CartModal = () => {
    const [ loading, setLoading ] = useState(false)
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { user } = useAuth()
    const { cart, precioTotal, clearCart } = useContext (CartContext)
    const toast = useToast()

    const createOrder = () => {
    setLoading(true)
    const objOrder = {
      buyer: {
        id: user.uid,
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

  return (
      <>
        <Flex 
          direction={{ base: 'column', sm: 'column', md: 'row', lg: 'row' }} 
          h={{ base: '350px', sm: '350px', md: '150px', lg: '150px' }}
          ml='8'
          mr='8'
          mb='10'
          p='10'
          justify='space-between'
          align='center'
          className='total'
        >
          <Link to='/productos'>
            <Button
              colorScheme='twitter' 
              w='180px' 
              borderRadius='8' 
              leftIcon={<BsFillCaretLeftFill />}
            >
              Ver mas productos
            </Button>
          </Link>
          <Box className='anima'>
            <Heading size='2xl' m={{ base: '8', sm: '8', md: '1', lg: '1' }}>
              Total = $ {precioTotal()}
            </Heading>
          </Box>
            <Button
              colorScheme='twitter' 
              w='180px' 
              borderRadius='8' 
              onClick={onOpen} 
              rightIcon={<BsFillCaretRightFill/>}
            >
              Realizar compra
            </Button>
        </Flex>
      <Modal isOpen={isOpen} onClose={onClose} size='xl'>
      <ModalOverlay />
          <ModalContent border='4px' borderRadius='8' bg='black' color='white' >
              <Flex direction='column' align='center' justify='center'>
                  <Box align='center' p='4'>
                      <ModalHeader>Comprar como {user.email} ?</ModalHeader>
                  </Box>
                  <ModalCloseButton bg='#1DA1F2' color='white' borderRadius='full'/>
                  <Box pb='4'>
                      <Button colorScheme='twitter' w='200px' onClick={createOrder} borderRadius='8'>Confirmar compra</Button>
                  </Box>
              </Flex>
          </ModalContent>
      </Modal>
    </>
  )
}

export default CartModal