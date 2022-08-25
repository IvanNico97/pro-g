import React from 'react'
import { 
  Flex,
  Box ,
  Heading
} from '@chakra-ui/react'
import { BsEnvelopeFill, BsCartCheckFill, BsFillTagsFill } from "react-icons/bs";

const Beneficios = () => {

  const beneficios = [
    {
      id:1,
      title:'Free shipping',
      logo:<BsEnvelopeFill/>
    },
    {
      id:1,
      title:'Protected buy',
      logo:<BsCartCheckFill/>
    },
    {
      id:1,
      title:'Discounts on all products',
      logo:<BsFillTagsFill/>
    },
  ]

  return (
    <>
        <Flex 
            w='100%'
            direction={{ base: 'column', sm: 'column', md: 'row', lg: 'row' }} 
            justify='center'
            align='center'
            bg='black'
            color='white'
        >
          {
            beneficios.map(beneficio => 
              <Flex 
                direction='column' 
                p='10'
                m='4' 
                w={{ base: '250px', sm: '250px', md: '300px', lg: '300px' }}
                align='center'
                className='animate animate__animated animate__fadeInLeft'
              >
                  <Box fontSize='30px' p='6'>{beneficio.logo}</Box>
                  <Heading size='lg' align='center' >{beneficio.title}</Heading>
              </Flex>
            )
          }
        </Flex> 
    </>
  )
}

export default Beneficios