import { ChakraProvider } from '@chakra-ui/react';
import React from 'react'
import ItemListContainer from './components/Main/ItemListContainer'
import NavBar from './components/Header/NavBar'


function App() {
  return (
    <ChakraProvider>
      <NavBar/>
      <ItemListContainer greeting='¡ Bienvenido a Pro g !'/>
    </ChakraProvider>
  );
}

export default App;
