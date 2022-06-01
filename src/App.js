import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react'
import ItemListContainer from './components/ItemLists/ItemListContainer'
import NavBar from './components/Header/NavBar'
import Footer from './components/Footer/Footer'
import ItemDetailContainer from './components/ItemDetails/ItemDetailContainer'
import Favoritos from './components/Favoritos/Favoritos'
import Carrito from './components/Carrito/Carrito'



function App() {
  return (
    <BrowserRouter>
    <ChakraProvider>
      <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer greeting='Catalogo de productos'/>} />
          <Route path='/category/:categoryName' element={<ItemListContainer greeting='Categorías' />} />
          <Route path='/detail/:productId' element={<ItemDetailContainer />} />
          <Route path='/favoritos' element={<Favoritos/>}/>
          <Route path='/carrito' element={<Carrito/>}/> 
          <Route path='*' element={<h1>PAGE NOT FOUND 404</h1>} />
        </Routes>
      <Footer/>
    </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
