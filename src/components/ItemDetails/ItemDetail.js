import React, { useState, useContext } from 'react'
import { Heading, Text, Image, Flex } from '@chakra-ui/react'
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
                justify='center'
                m='10'
                w='auto'
                border='1px'
                borderRadius='6' 
                borderColor='#E1E8ED'
            >
                <Flex >
                    <Image src={img} alt={name} boxSize='380px' objectFit='cover'/>
                </Flex>
                <Flex mt='8'>
                    <Heading size='xl'>{name}</Heading>
                </Flex>
                <Flex mt='4'>
                    <Text  color='#555555' fontSize='4xl'> ${price}</Text>
                </Flex>
                <Flex>
                    <Text fontSize='md' color='#555555'>{description}</Text>
                </Flex>
                <Flex direction='column' w='auto' mt='10' mb='4' align='center'>
                {
                    quantity > 0 ? 
                        <Link to='/cart'>
                            <Boton size='lg' colorScheme='twitter'>
                                Confirmar compra
                            </Boton>
                        </Link> 
                    :   <ItemCount initial={hasThisProduct()} stock={stock} handleCount={handleCount}/>
                }
                </Flex>
            </Flex>
        </>
    )
 }

export default ItemDetail