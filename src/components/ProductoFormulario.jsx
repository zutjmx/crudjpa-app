import { useState } from "react";

const initialFormData = {
    nombreProducto: '',
    descripcionProducto: '',
    precioProducto: ''
};

export const ProductoFormulario = () => {
    
    const [formData, setFormData] = useState(initialFormData);

    const { nombreProducto, descripcionProducto, precioProducto } = formData;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    return (
        <div className="d-flex justify-content-end">
            <h1>Formulario de Producto</h1>
            <form>
                <div className="mb-3">
                    <label for="nombreProducto" className="form-label">Nombre del Producto</label>
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
                    <label for="descripcionProducto" className="form-label">Descripción del Producto</label>
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
                    <label for="precioProducto" className="form-label">Precio del Producto</label>
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
                <button type="submit" className="btn btn-primary">Enviar</button>
            </form>
        </div>        
    );
}

