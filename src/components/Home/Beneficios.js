import React from 'react'
import { 
  Flex,
  Box ,
  Heading
} from '@chakra-ui/react'
import { BsEnvelopeFill, BsCartCheckFill, BsFillTagsFill, BsFillTelephoneFill } from "react-icons/bs";

const Beneficios = () => {

  const beneficios = [
    {
      id:1,
      title:'ENVÍO GRATIS',
      logo:<BsEnvelopeFill/>
    },
    {
      id:1,
      title:'COMPRA PROTEGIDA',
      logo:<BsCartCheckFill/>
    },
    {
      id:1,
      title:'DESCUENTOS',
      logo:<BsFillTagsFill/>
    },
    {
      id:1,
      title:'VENTA TELEFÓNICA',
      logo:<BsFillTelephoneFill/>
    }
  ]

  return (
    <>
        <Flex 
            w='100%'
            direction={{ base: 'column', sm: 'column', md: 'row', lg: 'row' }} 
            justify='space-around'
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
                  <Box fontSize='35px' p='6'>{beneficio.logo}</Box>
                  <Box>
                    <Heading size='md' align='center' >{beneficio.title}</Heading>
                  </Box>
              </Flex>
            )
          }
        </Flex> 
    </>
  )
}

export default Beneficios