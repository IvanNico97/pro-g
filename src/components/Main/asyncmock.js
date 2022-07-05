import { 
    placa1, 
    placa2, 
    Gabinete1,
    Gabinete2,
    mother1,
    mother2,
    auricular1,
    auricular2,
    mouse1,
    mouse3,
    Teclado1,
    Teclado2,
    LOGO1,
} from "../Imagenes";

const products = [
            { 
                id:1, 
                name: 'RADEON RX 590',
                price: 30000,
                stock: 8,
                dues: '12 cuotas sin interes',
                img: placa1,
                category:'placas',
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
                stock: 8,
                dues: '12 cuotas sin interes',
                img: placa2,
                category:'placas',
                description: 'Placa de video AMD'
            },
            { 
                id:5, 
                name: 'Gabinete Redragon Gc-550',
                price: 7500,
                stock: 8,
                dues: '12 cuotas sin interes',
                img: Gabinete1,
                category:'gabinetes',
                description:'Iluminación RGB y vidrio templado' 
            },
            { 
                id:6, 
                name: 'Gabinete Sentey F10',
                price: 13000, 
                stock: 8,
                dues: '12 cuotas sin interes',
                img: Gabinete2,
                category:'gabinetes',
                description:'Iluminación RGB y acrílico' 
            },
            { 
                id:9, 
                name: 'Motherboard ASUS Z690-A',
                price: 75000,
                stock: 8,
                dues: '12 cuotas sin interes',
                img: mother1,
                category:'mothers',
                description: 'Mother numero 1' 
            },
            { 
                id:10, 
                name: 'Motherboard ASUS Z590-E',
                price: 69300,
                stock: 8,
                dues: '12 cuotas sin interes',
                img: mother2,
                category:'mothers',
                description: 'Mother numero 2' 
            },
            { 
                id:13, 
                name: 'Auricular Hyperx Stringer S',
                price: 9000,
                stock: 7,
                dues: '12 cuotas sin interes',
                img: auricular1,
                category:'perifericos',
                description: 'Micrófono flexible incorporado' 
            },
            { 
                id:14, 
                name: 'Auricular Hyperx Cloud',
                price: 15500,
                stock: 8,
                dues: '12 cuotas sin interes',
                img: auricular2,
                category:'perifericos',
                description: 'Inalámbricos con luz roja led' 
            },
            { 
                id:17, 
                name: 'Mouse Logitech G300S',
                price: 2000,
                stock: 8,
                dues: '12 cuotas sin interes',
                img: mouse1,
                category:'perifericos',
                description: 'Cuenta con 9 botones para mayor control' 
            },
            { 
                id:18, 
                name: 'Mouse Logitech G203',
                price: 3000,
                stock: 10,
                dues: '12 cuotas sin interes',
                img: mouse3,
                category:'perifericos',
                description: 'Cuenta con 6 botones para mayor control' 
            },
            { 
                id:21, 
                name: 'Teclado Redragon Kumara K552',
                price: 7300,
                stock: 10,
                dues: '12 cuotas sin interes',
                img: Teclado1,
                category:'perifericos',
                description: 'Mecanico con luz rgb' 
            },
            { 
                id:22, 
                name: 'Teclado Redragon Draconic K530',
                price: 8200,
                stock: 8,
                dues: '12 cuotas sin interes',
                img: Teclado2,
                category:'perifericos',
                description: 'Mecanico, inalámbrico con luz rgb' 
            },
]

export const logo = () => {
    return LOGO1
}

export const callProducts = () => {
    return new Promise((resolve) => {
        setTimeout (() => {
            resolve(products)
        }, 2000)
    })
}

export const callProduct = (id) => {
    return new Promise((resolve)=> {
        setTimeout (() => {
            resolve(products.find(prod => prod.id === parseInt(id)))
        }, 2000)
    })
}

export const callCategory = (categoryName) => {
    return new Promise ((resolve) => {
        setTimeout (() => {
            resolve(products.filter(prod => prod.category === categoryName))
        }, 2000)
    })
}