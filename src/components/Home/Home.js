import React from 'react'
import Banner from './Banner'
import Beneficios from './Beneficios'
import Links from './Links'
import { Flex } from '@chakra-ui/react'


const Home = () => {
  return (
    <>
        <Flex direction='column' align="center">
            <Banner/>
            <Links/>
            <Beneficios/>
        </Flex>
    </>
  )
}

export default Home