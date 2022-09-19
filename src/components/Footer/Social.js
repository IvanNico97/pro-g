import React from 'react'
import { Flex, Box } from '@chakra-ui/react';
import { BsFacebook, BsTwitter, BsLinkedin } from "react-icons/bs";
import "./Footer.css"

const Social = () => {
  return (
    <Flex 
        justify='center' 
        align='center'
        mb={{ base: '6', sm: '6', md: '0', lg: '0' }}
    >
        <a href='https://www.linkedin.com/in/ivan-nicolas-avila-3ba5b2170/'>
            <Box pr='4' fontSize='30px' className='color-links'>
                {<BsFacebook/>}
            </Box>
        </a>
        <a href='https://www.linkedin.com/in/ivan-nicolas-avila-3ba5b2170/'>
            <Box pr='4' fontSize='30px' className='color-links'>
                {<BsTwitter/>}
            </Box>
        </a>
        <a href='https://www.linkedin.com/in/ivan-nicolas-avila-3ba5b2170/'>
            <Box pr='4' fontSize='30px' className='color-links'>
                {<BsLinkedin/>}
            </Box>
        </a>
    </Flex>
  )
}

export default Social