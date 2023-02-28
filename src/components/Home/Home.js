import React from 'react'
import Banner from './Banner'
import Beneficios from './Beneficios'
import Links from './Links'
import Promo from './Promo'
import { Flex } from '@chakra-ui/react'


const Home = () => {
  return (
    <>
        <Flex 
          direction='column' 
          align="center"
          pt='80px'
        >
            <Banner/>
            <Links/>
            <Promo/>
            <Beneficios/>
        </Flex>
    </>
  )
}

export default Home