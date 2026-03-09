import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const initialFormData = {
    nombreProducto: '',
    descripcionProducto: '',
    precioProducto: ''
};

export const ProductoFormulario = ({onAgregarProducto, productoSelected}) => {
    
    const [formData, setFormData] = useState(initialFormData);

    const {id, nombreProducto, descripcionProducto, precioProducto } = formData;

    useEffect(() => {
        if (productoSelected && productoSelected.id) {
            setFormData({
                id: productoSelected.id,
                nombreProducto: productoSelected.nombre || '',
                descripcionProducto: productoSelected.descripcion || '',
                precioProducto: productoSelected.precio || ''
            });
        }
    }, [productoSelected]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!nombreProducto || !descripcionProducto || !precioProducto) {
            Swal.fire({
                title: 'Error en el formulario',
                text: 'Todos los campos son obligatorios',
                icon: 'error',
                confirmButtonText: 'Aceptar'
            });
            return;
        }
        console.log('Datos del formulario:', formData);

        // Aquí puedes agregar la lógica para enviar los datos al backend o realizar otras acciones necesarias
        onAgregarProducto(formData);
        Swal.fire({
            title: 'Producto guardado exitosamente',
            text: `El producto "${nombreProducto}" ha sido guardado.`,
            icon: 'success',
            confirmButtonText: 'Aceptar'
        });

        // Reiniciar el formulario después de enviar los datos
        setFormData(initialFormData);
    }

    return (
        <div className="container mb-4">            
            <form className="card" onSubmit={handleSubmit}>
                <div className="mb-3">                    
                    <input 
                        type="text" 
                        className="form-control" 
                        id="nombreProducto" 
                        name="nombreProducto" 
                        placeholder="Nombre del producto"
                        value={nombreProducto}
                        onChange={handleChange}
                    />                    
                </div>
                <div className="mb-3">                    
                    <input 
                        type="text" 
                        className="form-control" 
                        id="descripcionProducto" 
                        name="descripcionProducto" 
                        placeholder="Descripción del producto"
                        value={descripcionProducto}
                        onChange={handleChange}

                    />                    
                </div>
                <div className="mb-3">                    
                    <input 
                        type="number" 
                        className="form-control" 
                        id="precioProducto" 
                        name="precioProducto" 
                        placeholder="Precio del producto"
                        value={precioProducto}
                        onChange={handleChange}
                    />
                </div>                                
                <button type="submit" className="btn btn-primary">Guardar</button>
            </form>
        </div>        
    );
}

