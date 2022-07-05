import React from 'react'
import { Flex, Box, Heading, Text } from '@chakra-ui/react'

const Nosotros = () => {
  return (
    <>
      <Flex direction={{ base: 'column', sm: 'column', md: 'row', lg: 'row' }} justify="space-between" m='8'>
        <Box w={{ base: 'auto', sm: 'auto', md: '25%', lg: '25%' }} m='8'>
          <Heading mb='4'>
            Nosotros
          </Heading>
          <Text>
            En PRO G buscamos destacar por nuestro conocimiento e intentamos establecernos como la opción ideal para sus compras de tecnología.
            Todos nuestros vendedores se encuentran altamente capacitados para asesorarlo y ofrecerle exactamente lo que necesita.
          </Text>
        </Box>
        <Box w={{ base: 'auto', sm: 'auto', md: '25%', lg: '25%' }} m='8'>
          <Heading mb='4'>
            Contactate
          </Heading>
          <Text pb='2'>
            <b>E-mail:</b> ventas@gmail.com
          </Text>
          <Text pb='2'>
            <b>Whatsapp:</b> +54 11-3844-9278
          </Text>
          <Text pb='2'>
            <b>Horario de Atención:</b> Lunes a viernes de 9:30 a 18:30 hs. Sábados de 10 a 13 hs. 
          </Text>
        </Box>
        <Box 
          w={{ base: 'auto', sm: 'auto', md: '25%', lg: '25%' }} 
          m='8'
          bg='#E1E8ED'
          color='#14171A'
          borderRadius='8'
        >
          <Heading mb='4'>
            Nuesta Misión
          </Heading>
          <Box>
            Brindarles a nuestros clientes las mejores soluciones informáticas diferenciándonos de la competencia.
          </Box>
        </Box>
        <Box 
          w={{ base: 'auto', sm: 'auto', md: '25%', lg: '25%' }}
          p='4'
          m='8'
          bg='#E1E8ED' 
          color='#14171A'
          borderRadius='8'
        >
          <Heading mb='4'>
            Nuesta Visión
          </Heading>
          <Box>
            Convertirnos en una empresa líder en el mercado de la tecnología,
            ofreciendo a nuestros clientes la mejor calidad de atención al precio más conveniente.
          </Box>
        </Box>
      </Flex>
    </>
  )
}

export default Nosotros