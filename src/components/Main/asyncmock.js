// import placa1 from "../Imagenes/placa1.jpg"
import { 
    placa1, 
    placa2, 
    placa3, 
    placa4 
} from "../Imagenes";

export const products = [
    { 
        id:1, 
        name: 'RADEON RX 590',
        price: 30000,
        category: 'placas de video',
        img: placa1,
        description: 'Placa de video ASUS'
    },
    { 
        id:2, 
        name: 'RADEON RX 5500 XT',
        price: 40000,
        category: 'placas de video',
        img: placa2,
        description: 'Placa de video AMD'
    },
    { 
        id:3, 
        name: 'RADEON RX 580',
        price: 50000,
        category: 'placas de video',
        img: placa3,
        description: 'Placa de video GIGABYTE'
    },
    { 
        id:4, 
        name: 'RADEON RX 6800',
        price: 60000,
        category: 'placas de video',
        img: placa4 ,
        description: 'Placa de video AMD' 
    }
]

export const callProducts = () => {
    return new Promise((resolve) => {
        setTimeout (() => {
            resolve(products)
        }, 2000)
    })
}