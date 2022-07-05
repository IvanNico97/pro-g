import React, { useState, useContext } from 'react'
import { Heading, Text, Image, Flex, Box } from '@chakra-ui/react'
import ItemCount from '../Elements/ItemCount'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import Boton from '../Elements/Boton'


const ItemDetail = ({id, category, name, price, img, stock, description}) => {
    const [quantity, setQuantity] = useState(0)
    const { addItem, getProduct } = useContext(CartContext)

    const handleCount = (count) => {
        setQuantity(count) 
        addItem ({ id, category, name, price, stock, quantity: count }) 
    }
    
    const hasThisProduct = () => {
        const product = getProduct(id)
        return product ? product.quantity : 1
    }

    return (
        <>
            <Flex
                direction="column"
                align='center'
                m='10'
                w= 'auto'
                border='1px'
                borderRadius='6' 
                borderColor='#E1E8ED'
            >
                <Box mt='4'>
                    <Image 
                        src={img} 
                        alt={name} 
                        boxSize={{ base: '200px', sm: '200px', md: '380px', lg: '380px' }} 
                    />
                </Box>
                <Box mt='8' align='center'>
                    <Heading color='#14171A' size='xl'>{name}</Heading>
                </Box>
                <Box mt='4'>
                    <Text color='#14171A' fontSize='4xl'> ${price}</Text>
                </Box>
                <Box align='center' p='3'>
                    <Text fontSize='sm' color='#555555'>{description}</Text>
                </Box>
                <Flex direction='column' w='auto' mt='8' mb='4' align='center'>
                    {
                        quantity > 0 ? 
                            <Link to='/cart'>
                                <Boton size='lg' colorScheme='twitter'>
                                    Confirmar compra
                                </Boton>
                            </Link> 
                        :   
                        <ItemCount initial={hasThisProduct()} stock={stock} handleCount={handleCount}/>
                    }
                </Flex>
            </Flex>
        </>
    )
 }

export default ItemDetail