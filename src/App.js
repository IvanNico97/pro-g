import { ChakraProvider } from '@chakra-ui/react';
import React from 'react'
/* import Header from './components/Header/Header'  */
import ItemListContainer from './components/Main/ItemListContainer'
import NavBar from './components/Header/NavBar'


function App() {
  return (
    <ChakraProvider>
      <NavBar/>
      <ItemListContainer greeting='¡Bienvenidos a Pro G!'/>
    </ChakraProvider>
  );
}

export default App;
