import React from 'react'
import { SimpleGrid, Box, Heading, Text, Image} from '@chakra-ui/react'
import Boton from '../Elements/Boton'
import Counter from '../Elements/Counter'
import CardWidget from '../Header/CardWidget'
import { AiFillHeart } from "react-icons/ai";



const ItemDetail = ({product} ) => {

    return (
        <>
           {product.map (p =>
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
                    <Image src={p.img} alt={p.name} boxSize='550px'/>
                </Box>
                <Box
                    m='4'
                    mr='40px'
                    w='350px'
                    border='1px' 
                    borderRadius='8' 
                    borderColor='#E1E8ED'
                >
                    <Box w='300px'>
                        <CardWidget color='#1DA1F2' align='center' mt='2' ml='270px' icon={<AiFillHeart/>} />
                    </Box>
                    <Box m='8' mt='2'>
                        <Heading size='xl'>{p.name}</Heading>
                    </Box>
                    <Box m='8'>
                    <Text fontSize='md'>{p.description}</Text>
                    </Box>
                    <Box ml='8' pb='3' align='left'>
                        <Text color='#1DA1F2' fontSize='4xl'> ${p.price}</Text>
                        <Text fontSize='md'> en {p.dues}</Text>
                    </Box>
                    <Box w='300px' border='1px' borderRadius='8' borderColor='#E1E8ED'>
                        <Counter initial='1' stock={p.stock} align='center' justify='center'/>
                    </Box>
                    <Box m='2'>
                        <Boton w='300px' size='lg' colorScheme='twitter'>Comprar</Boton>
                    </Box>
                    <Box m='2'>
                        <Boton w='300px' size='lg' color='#1DA1F2'>Agregar al carrito</Boton>
                    </Box>
                    <Box align='left' m='2' w='300px'>
                        <Text fontSize='sm' p='2'>Compra protegida</Text>
                        <Text fontSize='sm' p='2'>Envio Gratis</Text>
                        <Text fontSize='sm' p='2'>Devolucion gratis</Text>
                    </Box>
                </Box>
            </SimpleGrid>
            )}
        </>
    )
 }

export default ItemDetail