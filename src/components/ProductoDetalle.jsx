export const ProductoDetalle = ({ producto = {} }) => {
  return (
    <tr key={producto.id}>
        <td>{producto.id}</td>
        <td>{producto.nombre}</td>
        <td>${producto.precio}</td>
    </tr>  
  );
}
