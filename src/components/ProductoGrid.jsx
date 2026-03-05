import PropTypes from "prop-types";
import { ProductoDetalle } from "./ProductoDetalle";

export const ProductoGrid = ({ productos = [], onBorrarProducto }) => {
  return (
    <table className="table table-striped">
        <thead>
            <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Precio</th>
                <th>Acciones</th>
            </tr>
        </thead>
        <tbody>
            {productos.map(producto => (
                    <ProductoDetalle key={producto.id} producto={producto} onBorrar={onBorrarProducto} />
                )
            )
            }
        </tbody>
    </table>
  );
}

ProductoGrid.propTypes = {
    productos: PropTypes.array.isRequired
};
