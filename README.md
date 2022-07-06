Documentar

![alt text](/src/components/Imagenes/Gif/App.gif "GIF")

Para inicializar el proyecto:

1° Clonar
2° Install
3° Start


El proyecto es un e-commerce, para acceder a sus rutas es necesario loguearse. Su ruta '/' es ItemListContainer, este componente carga un listado de todos los productos.

Su componente NavBar es la ruta '/category/:categoryId', carga un listado de los productos identificados por categorias.

Cada producto cuenta con un Link hacia '/detail/:productId' que es el componente ItemDetailContainer, este carga una card con el detalle del producto.

El componente ItemDetailContainer, cuenta con un boton que nos direcciona al componente Cart './cart'

Cart('/cart') da vista a los detalles de los productos en nuestro carrito, y nos muestra el precio total de estos. Además posee tres botones, 'Eliminar producto', 'Limpiar carrito' y 'Generar orden', este último abre un modal con un checkout de nuestro usuario y un boton para confirmar la compra. 



