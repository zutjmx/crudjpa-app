import { useState } from "react";
import Swal from "sweetalert2";

const initialFormData = {
    nombreProducto: '',
    descripcionProducto: '',
    precioProducto: ''
};

export const ProductoFormulario = ({onAgregarProducto}) => {
    
    const [formData, setFormData] = useState(initialFormData);

    const { nombreProducto, descripcionProducto, precioProducto } = formData;

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
            title: 'Producto agregado exitosamente',
            text: `El producto "${nombreProducto}" ha sido agregado.`,
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
                    {/* <label htmlFor="nombreProducto" className="form-label">Nombre del Producto</label> */}
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
                    {/* <label htmlFor="descripcionProducto" className="form-label">Descripción del Producto</label> */}
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
                    {/* <label htmlFor="precioProducto" className="form-label">Precio del Producto</label> */}
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
                <button type="submit" className="btn btn-primary">Crear</button>
            </form>
        </div>        
    );
}

