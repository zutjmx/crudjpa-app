import { useEffect, useState } from "react";
import { listProductos } from '../services/ProductoService';

export const ProductoApp = () => {

    const [ productos, setProductos ] = useState([]);

    useEffect(() => {
        setProductos(listProductos());
    }, []);

    return (
        <>
            <div className="container mt-4 mb-4">
                <div className="card">
                    <div className="card-body">
                        <h2 className="card-title">Productos</h2>
                        <h4 className="card-subtitle mb-2 text-body-secondary">Lista de productos disponibles</h4>            
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
