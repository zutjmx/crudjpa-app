import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/productos';

export const listProductos = async () => {
    try {
        const response = await axios.get(API_BASE_URL);
        return response.data;
    } catch (error) {
        console.error('Error fetching productos:', error);
        throw error;
    }
}

export const createProducto = async ({ nombreProducto, descripcionProducto, precioProducto, skuProducto }) => {
    try {
        const response = await axios.post(
            API_BASE_URL, 
            { 
                nombre: nombreProducto, 
                descripcion: descripcionProducto, 
                precio: precioProducto, 
                sku: skuProducto
            }
        );
        return response.data;
    } catch (error) {
        console.error('Error creating producto:', error);
        throw error;
    }
}

export const updateProducto = async ({id, nombreProducto, descripcionProducto, precioProducto, skuProducto }) => {
    try {
        const response = await axios.put(
            `${API_BASE_URL}/${id}`, 
            { 
                nombre: nombreProducto, 
                descripcion: descripcionProducto, 
                precio: precioProducto, 
                sku: skuProducto
            }
        );
        return response.data;
    } catch (error) {
        console.error('Error updating producto:', error);
        throw error;
    }
}

export const deleteProducto = async (id) => {
    try {
        await axios.delete(`${API_BASE_URL}/${id}`);
    } catch (error) {
        console.error('Error deleting producto:', error);
        throw error;
    }
}

export const generaNumeroAleatorio = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
