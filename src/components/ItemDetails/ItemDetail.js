import React, { useState } from 'react'
import { SimpleGrid, Box, Heading, Text, Image} from '@chakra-ui/react'
import ItemCount from '../Elements/ItemCount'
import CartWidget from '../Header/CartWidget'
import { Link } from 'react-router-dom'
import { AiFillHeart } from "react-icons/ai";


const ItemDetail = (props) => {
  const [quantity, setQuantity] = useState(0)

    const handleCount = () => {
        console.log('añadido al carrito');
        /* setQuantity(count)   */
    } 
    
    return (
        <>
            <SimpleGrid
                columns={{ sm:2, md: 2}}
                align='center'
                m='10'
                border='1px'
                borderRadius='8' 
                borderColor='#E1E8ED'
            >
                <Box
                    align='right'
                    m='4' 
                    ml='50'
                    pl='100' 
                >
                    <Image src={props.img} alt={props.name} boxSize='auto'/>
                </Box>
                <Box
                    m='4'
                    mr='40px'
                    w='350px'
                    border='1px' 
                    borderRadius='8' 
                    borderColor='#E1E8ED'
                >
                    <Link to='/favoritos'>
                            <CartWidget color='#1DA1F2' ml='86%' icon={<AiFillHeart/>} /> 
                    </Link>
                    <Box m='8' mt='2'>
                        <Heading size='xl'>{props.name}</Heading>
                    </Box>
                    <Box m='8'>
                        <Text fontSize='md'>{props.description}</Text>
                    </Box>
                    <Box ml='8' pb='3' align='left'>
                        <Text color='#1DA1F2' fontSize='4xl'> ${props.price}</Text>
                        <Text fontSize='md'> en {props.dues}</Text>
                    </Box>
                    {
                        quantity > 0 ? <Link to='/cart'>Finalizar compra</Link> : <ItemCount initial={1} stock={props.stock} handleCount={handleCount} />
                    }
                    <Box align='left' m='2' w='300px'>
                        <Text fontSize='sm' p='2'>Compra protegida</Text>
                        <Text fontSize='sm' p='2'>Envio Gratis</Text>
                        <Text fontSize='sm' p='2'>Devolucion gratis</Text>
                    </Box>
                </Box>
            </SimpleGrid>
        
        </>
    )
 }

export default ItemDetail