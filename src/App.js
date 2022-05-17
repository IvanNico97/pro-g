import { ChakraProvider } from '@chakra-ui/react';
import React from 'react'
/* import Header from './components/Header/Header' */
import ItemListContainer from './components/Main/ItemListContainer'
import NavBar from './components/Header/NavBar'
import CardProducto from './components/Main/CardProducto'



function App() {
  return (
    <ChakraProvider>
      <NavBar/>
      <ItemListContainer greeting='Placa Radeon RX 5500XT'/>
      <CardProducto/>
    </ChakraProvider>
  );
}

export default App;
