// import placa1 from "../Imagenes/placa1.jpg"
import { 
    placa1, 
    placa2, 
    placa3, 
    placa4,
    Gabinete1,
    Gabinete2,
    Gabinete3,
    Gabinete4,
    Gabinete5,
    Gabinete6 
} from "../Imagenes";

export const products = [
    /* {
        "id":1,
        "nombreCategoria":"Placas de video",
        "imagenCategoria": placa1,
        "productos": [ */
            { 
                id:1, 
                name: 'RADEON RX 590',
                price: 30000,
                stock: 8,
                dues: '12 cuotas sin interes',
                category: 'placas de video',
                img: placa1,
                description:
                    <div>
                        <p> Placa de video ASUS con
                            rendiento mejorado y diseño
                            de energía
                        </p>
                    </div>
                           
            },
            { 
                id:2, 
                name: 'RADEON RX 5500',
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
            },
     /*    ]
    },
    {
        "id":2,
        "nombreCategoria": "Gabinetes",
        "imagenCategoria": Gabinete1,
        "productos" : [ */

            { 
                id:5, 
                name: 'Gabinete',
                price: 5500,
                category: 'gabinete',
                img: Gabinete1,
                description: 'Gabinete numero 1' 
            },
            { 
                id:6, 
                name: 'Gabinete',
                price: 4000,
                category: 'gabinete',
                img: Gabinete2,
                description: 'Gabinete numero 2' 
            },
            { 
                id:7, 
                name: 'Gabinete',
                price: 5000,
                category: 'gabinete',
                img: Gabinete3,
                description: 'Gabinete numero 3' 
            },
            { 
                id:8, 
                name: 'Gabinete',
                price: 6500,
                category: 'gabinete',
                img: Gabinete4,
                description: 'Gabinete numero 4' 
            },
            { 
                id:9, 
                name: 'Gabinete',
                price: 7500,
                category: 'gabinete',
                img: Gabinete5,
                description: 'Gabinete numero 5' 
            },
            { 
                id:10, 
                name: 'Gabinete',
                price: 8000,
                category: 'gabinete',
                img: Gabinete6,
                description: 'Gabinete numero 6' 
            }

    /*     ]
    }, */
]


export const callProducts = () => {
    return new Promise((resolve) => {
        setTimeout (() => {
            resolve(products)
        }, 2000)
    })
}

export const callProduct = () => {
    return new Promise((resolve)=> {
        setTimeout (() => {
            resolve(products)
        }, 2000)
    })
}