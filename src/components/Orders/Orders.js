import React, { useEffect, useState } from 'react'
import { useAuth } from '../../context/AuthContext'
import { getOrders } from '../../services/firebase/firestore'
import  Order  from "./Order";

const Orders = () => {
    const [orders, setOrders] = useState();
    const { user} = useAuth()

    useEffect(() => {
        getOrders(user.uid)
            .then(response => {
                setOrders(response)
            }).catch(error => {
                console.log(error)
            })

    }, [user])

    return (
        <>
            {
                orders && orders.map((order, key) => <Order key={key} order={order}/>)
            }
        </>
    )
}

export default Orders