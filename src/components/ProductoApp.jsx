import { useEffect, useState } from "react";
//import Swal from "sweetalert2";
import { listProductos } from '../services/ProductoService';
import { ProductoGrid } from "./ProductoGrid";

export const ProductoApp = () => {

    const [ productos, setProductos ] = useState([]);

    //Swal.showLoading();

    useEffect(() => {
        setProductos(listProductos());        
    }, []);

    /* Swal.fire({
        title: 'Productos cargados exitosamente',
        allowOutsideClick: false,        
    }); */
    
    return (
        <>
            <div className="container mt-4 mb-4">
                <div className="card">
                    <div className="card-body">
                        <h2 className="card-title">Productos</h2>
                        <h4 className="card-subtitle mb-2 text-body-secondary">Lista de productos disponibles</h4>            
                        <ProductoGrid productos={productos} />
                    </div>
                </div>
            </div>
                        
        </>
    )
}
