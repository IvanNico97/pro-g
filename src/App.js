import { ChakraProvider } from '@chakra-ui/react';
import { Routes, Route } from "react-router-dom";
import React from 'react'
import ItemListContainer from './components/ItemLists/ItemListContainer'
import NavBar from './components/Header/NavBar'
import Footer from './components/Footer/Footer'
import ItemDetailContainer from './components/ItemDetails/ItemDetailContainer'
import Cart from './components/Carrito/Cart'
import Nosotros from './components/Footer/Nosotros'
import { CartContextProvider } from './context/CartContext'
import { AuthProvider } from './context/AuthContext'
import { ProtectedRoute } from './services/firebase/ProtectedRoute'
import Login from './components/Login/Login'
import Home from './components/Home/Home'


function App() {

  return (
    <AuthProvider>
      <CartContextProvider>
        <ChakraProvider>
          <NavBar/>
          <Routes>
            <Route path='/' element= { <Home/> }/>
            <Route path='/productos' element= { <ItemListContainer greeting='Nuestros productos'/> }/>
            <Route path='/category/:categoryId' element=
              { 
                <ProtectedRoute>
                  <ItemListContainer/>
                </ProtectedRoute>
              } 
            />
            <Route path='/detail/:productId' element=
              {
                <ProtectedRoute>
                  <ItemDetailContainer /> 
                </ProtectedRoute>
              }
            />
            <Route path='/carrito' element=
              {
                <ProtectedRoute>
                  <Cart/>
                </ProtectedRoute>
              }
            /> 
            <Route path='*' element={ <h1>PAGE NOT FOUND 404</h1> } />
            <Route path='/registro' element={ <Login/> }/>
            <Route path='/nosotros' element={ <Nosotros/> } />
          </Routes>
          <Footer />
        </ChakraProvider>
      </CartContextProvider>
    </AuthProvider>
  )
}

export default App;
