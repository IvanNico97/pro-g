import React, { useState, useContext } from 'react'
import { Heading, Text, Image, Flex, Box, Button } from '@chakra-ui/react'
import ItemCount from '../Elements/ItemCount'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'


const ItemDetail = ({id, category, name, price, img, stock, description}) => {
    const [quantity, setQuantity] = useState(0)
    const { addItem, getProduct } = useContext(CartContext)

    const handleCount = (count) => {
        setQuantity(count) 
        addItem ({ id, category, img, name, price, stock, quantity: count }) 
    }
    
    const hasThisProduct = () => {
        const product = getProduct(id)
        return product ? product.quantity : 1
    }

    return (
        <>
            <Flex
                direction={{ base: 'column', sm: 'row', md: 'row' }}
                justify='space-evenly'
                align='center'
                w= 'auto'
                h='700px'
                bg='black'
            >
                <Box mt='4'>
                    <Image 
                        src={img} 
                        alt={name} 
                        boxSize={{ base: '200px', sm: '200px', md: '380px', lg: '380px' }} 
                    />
                </Box>
            <Flex direction='column' w='auto' mt='8' mb='4' align='center'>
                <Box mt='8' align='center'>
                    <Heading color='white' size='xl'>{name}</Heading>
                </Box>
                <Box mt='4'>
                    <Text color='white' fontSize='2xl'> ${price}</Text>
                </Box>
                <Box align='center' p='3' mt='4' mb='4' w={{ base: '200px', sm: '350px', md: '400px' }}>
                    <Text fontSize='sm' color='white'>{description}</Text>
                </Box>
                    {
                        quantity > 0 ? 
                            <Link to='/carrito'>
                                <Button 
                                    size='lg' 
                                    colorScheme='twitter' 
                                    borderRadius='8'
                                >
                                    Ir al carrito
                                </Button>
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