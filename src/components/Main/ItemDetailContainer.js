import React,{ useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import { callProduct } from './asyncmock'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState([])

    useEffect (() => {
        callProduct()
        .then(response => setProduct(response.slice(0,1)))
    }, [])


    return(
        <>
            <ItemDetail product={product} />
        </>
    )
}

export default ItemDetailContainer