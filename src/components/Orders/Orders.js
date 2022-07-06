import React, { useEffect, useState } from 'react'
import { useAuth } from '../../context/AuthContext'
import { getOrders } from '../../services/firebase/firestore'
import  Order  from "./Order";
import {
    Flex,
    Spinner,
    Box,
    Heading,
    Text,
    Button
} from "@chakra-ui/react";
import { Link } from 'react-router-dom'

const Orders = () => {
    const [isLoading, setLoading] = useState(true)
    const [orders, setOrders] = useState();
    const { user } = useAuth()
 
    useEffect(() => {
        
        getOrders(user.uid)
            .then(response => {
                setOrders(response)
                setLoading(false)
            }).catch(error => {
                console.log(error)
            })

    }, [user])

    if(isLoading) {
        return (
            <Flex h='500px' align='center' justify='center'>
                <Spinner
                    thickness='4px'
                    speed='1s'
                    emptyColor='#E1E8ED'
                    color='#1DA1F2'
                    size='xl'
                />
            </Flex>
        )
    } 

    return (
        <>
            <Box w='100%' align='center' mb='10'>
                <Heading bg='#E1E8ED' color='#14171A' borderRadius='8' w='250px' size='md' m='8' p='6'>Orders</Heading>
            </Box>
            {   
                orders && orders.length > 0
                ? orders.map((order, key) => <Order key={key} order={order}/>)
                : 
                <Flex direction='column' align='center' justify='center' m='100px'>
                    <Heading>No posee ordenes de compra</Heading>
                    <Text pt='5'>¡Nuestros productos te esperan!</Text>
                    <Box m='70px'>
                        <Link to='/'>
                            <Button colorScheme='twitter' size='lg'>Continue Comprando</Button>
                        </Link>
                    </Box>
                </Flex>
            }
        </>
    )
}

export default Orders