import { ChakraProvider } from '@chakra-ui/react';
import React from 'react'
/* import Header from './components/Header/Header' */
import ItemListContainer from './components/Main/ItemListContainer'
import NavBar from './components/Header/NavBar'



function App() {
  return (
    <ChakraProvider>
      <NavBar/>
      <ItemListContainer greeting='Futura Card del producto'/>
    </ChakraProvider>
  );
}

export default App;
