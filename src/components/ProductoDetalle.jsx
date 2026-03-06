import PropTypes from "prop-types";

export const ProductoDetalle = ({ producto = {}, onBorrar, onSeleccionar }) => {
  return (
    <tr key={producto.id}>
        <td>{producto.id}</td>
        <td>{producto.nombre}</td>
        <td>${producto.precio}</td>
        <td>
            <button className="btn btn-warning" onClick={() => onSeleccionar(producto.id)}>
                Editar
            </button>
        </td>
        <td>
            <button className="btn btn-danger" onClick={() => onBorrar(producto.id)}>
                Eliminar
            </button>
        </td>
    </tr>  
  );
}

ProductoDetalle.propTypes = {
    producto: PropTypes.object.isRequired,
    onBorrar: PropTypes.func.isRequired,
    onSeleccionar: PropTypes.func.isRequired
};
