import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { 
    listProductos, 
    generaNumeroAleatorio, 
    createProducto, 
    updateProducto, 
    deleteProducto 
} from '../services/ProductoService';
import { ProductoGrid } from "./ProductoGrid";
import { ProductoFormulario } from "./ProductoFormulario";
import Swal from "sweetalert2";

export const ProductoApp = ({titulo='', subtitulo=''}) => {

    const [ productos, setProductos ] = useState([]);

    const [productoSelected, setProductoSelected] = useState({
        id: '',
        nombreProducto: '',
        descripcionProducto: '',
        precioProducto: '',
        skuProducto: ''
    });

    const getProductos = async () => {
        try {
            Swal.fire({
                title: 'Cargando productos...',
                allowOutsideClick: false,
                didOpen: () => {
                    Swal.showLoading();
                }
            });
            
            const productosData = await listProductos();
            console.log("productosData:",productosData);
            setProductos(productosData._embedded.productoes);
            
            Swal.close();
        } catch (error) {
            console.error('Error fetching productos:', error);
            Swal.fire('Error', 'Error al cargar los productos', 'error');
        }
    }

    useEffect(() => {
        getProductos();
    }, []);

    const handlerAgregarProducto = async (producto) => {
        console.log('Producto en handlerAgregarProducto:', producto);        
        
        Swal.fire({
            title: 'Guardando producto...',
            allowOutsideClick: false,
            didOpen: () => {
                Swal.showLoading();
            }
        });
        
        if (!producto.id) {
            console.log('Va a entrar a crear producto');            
            const nuevoProducto = await createProducto(producto);
            setProductos([...productos, nuevoProducto]);                        
            Swal.close();
            return;
        }
        console.log('Va a entrar a actualizar producto');            
        const productoActualizado = await updateProducto(producto);
        setProductos(productos.map(p => p.id === producto.id ? productoActualizado : p));
        Swal.close();                
    }

    const handlerEliminarProducto = (id) => {
        Swal.fire({
            title: '¿Estás seguro?',
            text: "¡No podrás revertir esto!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, eliminarlo!',
            cancelButtonText: 'Cancelar'
        }).then(async (result) => {
            if (result.isConfirmed) {
                
                Swal.fire({
                    title: 'Eliminando producto...',
                    allowOutsideClick: false,
                    didOpen: () => {
                        Swal.showLoading();
                    }
                });
                
                await deleteProducto(id);
                const productosActualizados = productos.filter(producto => producto.id !== id);
                setProductos(productosActualizados);
                
                Swal.fire('¡Eliminado!',
                    'El producto ha sido eliminado.',
                    'success'
                );
            }
        });
    }

    const handlerSeleccionarProducto = (id) => {
        const productoSeleccionado = productos.find(producto => producto.id === id);
        setProductoSelected(productoSeleccionado);
        console.log('Producto seleccionado con ID:', id);
        console.log('Datos del producto seleccionado',productoSeleccionado);
    }
    
    return (
        <>
            <div className="container mt-4 mb-4">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Formulario de Producto</h5>
                        <h6 className="card-subtitle mb-2 text-body-secondary">Agregar Producto</h6>                                    
                        <ProductoFormulario 
                            onAgregarProducto={handlerAgregarProducto}
                            productoSelected={productoSelected} 
                        />
                    </div>
                </div>                
                <div className="card">
                    <div className="card-body">
                        <h2 className="card-title">{titulo}</h2>
                        <h4 className="card-subtitle mb-2 text-body-secondary">{subtitulo}</h4>                                    
                        
                        {productos.length === 0 ? (
                            <p className="text-center alert alert-info">No hay productos disponibles.</p>
                        ) : (
                            <ProductoGrid 
                                productos={productos} 
                                onBorrarProducto={handlerEliminarProducto} 
                                onSeleccionarProducto={handlerSeleccionarProducto}                            
                            />
                        )}
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
