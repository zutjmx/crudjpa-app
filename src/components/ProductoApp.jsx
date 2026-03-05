import { useEffect, useState } from "react";
import PropTypes from "prop-types";
//import Swal from "sweetalert2";
import { listProductos,generaNumeroAleatorio } from '../services/ProductoService';
import { ProductoGrid } from "./ProductoGrid";
import { ProductoFormulario } from "./ProductoFormulario";

export const ProductoApp = ({titulo='', subtitulo=''}) => {

    const [ productos, setProductos ] = useState([]);

    //Swal.showLoading();

    useEffect(() => {
        setProductos(listProductos());        
    }, []);

    /* Swal.fire({
        title: 'Productos cargados exitosamente',
        allowOutsideClick: false,        
    }); */

    const handlerAgregarProducto = (producto) => {
        // Aquí puedes agregar la lógica para agregar el producto a tu lista o realizar otras acciones necesarias
        const { nombreProducto, descripcionProducto, precioProducto } = producto;

        const nuevoProducto = {
            id: generaNumeroAleatorio(100, 500), // Genera de manera temporal un ID aleatorio para el nuevo producto
            nombre: nombreProducto,
            descripcion: descripcionProducto,
            precio: parseFloat(precioProducto)
        };

        console.log('Producto con ID:', nuevoProducto);

        setProductos([...productos, {...nuevoProducto}]);
        
    }
    
    return (
        <>
            <div className="container mt-4 mb-4">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Formulario de Producto</h5>
                        <h6 className="card-subtitle mb-2 text-body-secondary">Agregar Producto</h6>                                    
                        <ProductoFormulario onAgregarProducto={handlerAgregarProducto} />
                    </div>
                </div>                
                <div className="card">
                    <div className="card-body">
                        <h2 className="card-title">{titulo}</h2>
                        <h4 className="card-subtitle mb-2 text-body-secondary">{subtitulo}</h4>                                    
                        <ProductoGrid productos={productos} />
                    </div>
                </div>
            </div>                        
        </>
    )
}

ProductoApp.propTypes = {
    titulo: PropTypes.string.isRequired,
    subtitulo: PropTypes.string.isRequired
};
