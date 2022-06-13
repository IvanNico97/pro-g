import { useState, createContext } from 'react'

export const CartContext = createContext()

export const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState([])

    const addItem = (productAdd) => {
        if(!isInCart(productAdd.id)){
        setCart ([...cart, productAdd])
        } else {
            const newCart = cart.map(producto => {
                if(producto.id === productAdd.id){
                    const newProduct = {
                        ...producto,
                        quantity: productAdd.quantity /* + productAdd.quantity */
                    }
                    return newProduct
                } else {
                    return producto
                }
            })
            setCart(newCart)
        }
    }

    const isInCart = (id) => {
        return cart.some(producto => producto.id === id)
    }

    const getQuantity = () => {
        let acumulador = 0
        cart.forEach(productos => {
            acumulador += parseInt(productos.quantity)
        })
        return acumulador
    }

    const clearCart = () => {
        const newCart = []
        setCart(newCart)
    }

    const removeItem = (id) => {
        const newCart = cart.filter(producto => producto.id !== id) 
        setCart(newCart)
    }

    const getProduct = (id) => {
        return cart.find(producto => producto.id === id)
    }

    const precioTotal = () => {
        let total = 0
        cart.forEach(producto => {
            total += producto.quantity * producto.price
        })
        return total;
    }

    const cantidadProductos = () => {
        let count = 0
        cart.forEach(producto => {
            count += producto.quantity
        })

        return count;
    }
    

    return(
        <CartContext.Provider value={{cart, addItem, getQuantity, clearCart, removeItem, getProduct, precioTotal, cantidadProductos }}>
            {children}
        </CartContext.Provider>
    )
}

 