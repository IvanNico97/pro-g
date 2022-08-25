import React from 'react'
import { Flex, Image } from '@chakra-ui/react'
import {auri, mous, tecla, pad} from '../Imagenes/index'
import { Link } from 'react-router-dom'
import "./CardLinks.css"


const CardLinks = () => {
    const cards = [
        { 
            id:1, 
            title:'Headphones',
            image: auri,
            text: 'Headphones at the best price on the market',
            link: '/category/Headphones'
        },
        { 
            id:2 ,
            title:'Mouses',
            image: mous,
            text: 'Mouses at the best price on the market',
            link:'/category/Mouses'
        },
        { 
            id:3,
            title: 'Keyboards',
            image: tecla,
            text: 'Keyboards at the best price on the market',
            link:'/category/Keyboards'
        },
        { 
            id:4,
            title:'Pads',
            image: pad,
            text: 'Pads at the best price on the market',
            link:'/category/Pads'
        },
    ]
    
  return (
    <>
        <Flex
            justify="center"
            direction={{ base: 'column', sm: 'column', md: 'row', lg: 'row' }}
            w='100%'
        >
            {
                cards.map(card =>  
                    <Flex p='2' key={card.id}>
                        <Link to={card.link}>
                            <Image className='card card-img-top' boxSize='300px' objectFit='cover' src={card.image}/>
                        </Link>
                    </Flex> 
                )
            }
        </Flex>
        </>
  );
}

export default CardLinks