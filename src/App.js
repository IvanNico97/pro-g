import { ChakraProvider } from '@chakra-ui/react';
import { Routes, Route } from "react-router-dom";
import React from 'react'
import ItemListContainer from './components/ItemLists/ItemListContainer'
import NavBar from './components/Header/NavBar'
import Footer from './components/Footer/Footer'
import ItemDetailContainer from './components/ItemDetails/ItemDetailContainer'
import Cart from './components/Carrito/Cart'
import { CartContextProvider } from './context/CartContext'
import { AuthProvider } from './context/AuthContext'
import { ProtectedRoute } from './services/firebase/ProtectedRoute'
import Login from './components/Login/Login'



function App() {

  return (
    <AuthProvider>
      <CartContextProvider>
        <ChakraProvider>
          <NavBar/>
          <Routes>
          <Route path='/' element=
            {
              <ProtectedRoute>
                <ItemListContainer greeting='Productos destacados'/> 
              </ProtectedRoute>
            }
          />
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
        <Route path='/cart' element=
          {
            <ProtectedRoute>
              <Cart/>
            </ProtectedRoute>
          }
        /> 
          <Route path='*' element={<h1>PAGE NOT FOUND 404</h1>} />
          <Route path='/login' element={<Login/>}/>
          </Routes>
          <Footer />
        </ChakraProvider>
      </CartContextProvider>
    </AuthProvider>
  )
}

export default App;
