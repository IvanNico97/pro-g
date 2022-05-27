import { ChakraProvider } from '@chakra-ui/react';
import React from 'react'
import ItemListContainer from './components/Main/ItemListContainer'
import NavBar from './components/Header/NavBar'
import ItemDetailContainer from './components/Main/ItemDetailContainer'



function App(props) {
  return (
    <ChakraProvider>
      <NavBar/>
     {/* <ItemListContainer greeting='¡ Bienvenido a Pro g !'/>*/}
      <ItemDetailContainer />
    </ChakraProvider>
  );
}

export default App;
