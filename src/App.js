import { ChakraProvider } from '@chakra-ui/react';
import React from 'react'
import NavBar from './components/NavBar/NavBar'
import Header from './components/Header'


function App() {
  return (
    <ChakraProvider>
    {
      /* <Header/> */
    }
      <NavBar/>
    </ChakraProvider>
  );
}

export default App;
