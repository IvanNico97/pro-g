import React from 'react'
import { Flex, Box, Image } from '@chakra-ui/react'
import { bannerteclado2, bannermouse, bannerauri } from '../Imagenes/index'
import Carousel from 'react-bootstrap/Carousel';
 
const Banner = () => {
  return (
    <>
        <Flex 
            bg='black'
            pt='10'
            w='100%'
        >
            <Carousel>
                <Carousel.Item interval={8000}>
                    <Box h='520px'>
                        <Image objectFit='cover' src={bannerauri}/>
                    </Box>
                </Carousel.Item>
                <Carousel.Item interval={8000}>
                    <Box h='520px'>
                        <Image objectFit='cover' src={bannermouse}/>
                    </Box>
                </Carousel.Item>
                <Carousel.Item interval={8000}>
                    <Box h='520px'>
                        <Image objectFit='cover' src={bannerteclado2}/>
                    </Box>
                </Carousel.Item>
            </Carousel>
        </Flex>
    </>
  )
}

export default Banner