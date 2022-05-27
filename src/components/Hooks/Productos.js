import React, { useState, useEffect} from 'react'

const Productos = () => {
    const [productos, setProductos] = useState([])
    const [input, setInput] = useState('')

   /*  useEffect (() => {
        fetch('https://api.mercadolibre.com/sites/MLA/search?q=iphone')
        .then(response =>  response.json())
        .then(productos => setProductos(productos.results))
    }, []) */

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${input}`)
        .then(response =>  response.json())
        .then(productos => setProductos(productos.results))
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input  type='text' onChange={(e)=>setInput(e.target.value)}></input>
                <button type='submit'>Buscar</button>
            </form>
            { productos.map ( products => 
                <li>
                    <img src={products.thumbnail} alt={products.title} />
                    <p>{products.title}</p>
                    <p>${products.price}</p>
                </li>
            )}
        </>
    )
}

export default Productos