import { useState } from "react";

const initProductos = [
    { id: 1, nombre: 'Producto 1', precio: 10.99 },
    { id: 2, nombre: 'Producto 2', precio: 19.99 },
    { id: 3, nombre: 'Producto 3', precio: 5.49 },
    { id: 4, nombre: 'Maple Bacon Jerky', precio: 6.99 },
    { id: 5, nombre: 'Compact Hair Dryer', precio: 29.99 },
    { id: 6, nombre: 'Pet First Aid Kit', precio: 29.99 },
    { id: 7, nombre: 'Gardening Gloves with Claws', precio: 24.99 },
    { id: 8, nombre: 'Smartphone Projector Kit', precio: 24.99 },
    { id: 9, nombre: 'Mini Food Processor', precio: 39.99 },
    { id: 10, nombre: 'Portable Pet Water Bottle', precio: 18.99 },
    { id: 11, nombre: 'Lemon Zest Olive Oil', precio: 8.99 },
    { id: 12, nombre: 'Electric Stir Fry Pan', precio: 49.99 },
    { id: 13, nombre: 'Reusable Produce Bags Set', precio: 14.99 },
]

export const ProductoApp = () => {

    const [ productos, setProductos ] = useState(initProductos)

    return (
        <>
            <div className="container mt-4 mb-4">
                <div className="card">
                    <div className="card-body">
                        <h1 className="card-title">Productos</h1>            
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Nombre</th>
                                    <th>Precio</th>
                                </tr>
                            </thead>
                            <tbody>
                                {productos.map(producto => (
                                    <tr key={producto.id}>
                                        <td>{producto.id}</td>
                                        <td>{producto.nombre}</td>
                                        <td>${producto.precio}</td>
                                    </tr>
                                    )
                                )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
                        
        </>
    )
}
