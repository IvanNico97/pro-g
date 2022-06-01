import React from 'react'
import Item from './Item'

const ItemList = ({ products }) => {
  return (
    <> 
        { products.map(producto => <Item key={producto.id} {...producto} />)}
    </>
  )
}

export default ItemList