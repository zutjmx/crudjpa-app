import PropTypes from "prop-types";
import { ProductoDetalle } from "./ProductoDetalle";

export const ProductoGrid = ({ productos = [], onBorrarProducto, onSeleccionarProducto }) => {
  return (
    <table className="table table-striped">
        <thead>
            <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Descripción</th>
                <th>SKU</th>
                <th>Precio</th>
                <th>Editar</th>
                <th>Borrar</th>
            </tr>
        </thead>
        <tbody>
            {productos.map(producto => (
                    <ProductoDetalle 
                        key={producto.id} 
                        producto={producto} 
                        onBorrar={onBorrarProducto} 
                        onSeleccionar={onSeleccionarProducto} 
                    />
                )
            )
            }
        </tbody>
    </table>
  );
}

ProductoGrid.propTypes = {
    productos: PropTypes.array.isRequired,
    onBorrarProducto: PropTypes.func.isRequired,
    onSeleccionarProducto: PropTypes.func.isRequired
};
