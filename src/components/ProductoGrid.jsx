import PropTypes from "prop-types";
import { ProductoDetalle } from "./ProductoDetalle";

export const ProductoGrid = ({ productos = [] }) => {
  return (
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
                    <ProductoDetalle key={producto.id} producto={producto} />
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
