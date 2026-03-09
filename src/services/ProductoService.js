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

export const createProducto = async (producto) => {
    try {
        const response = await axios.post(API_BASE_URL, producto);
        return response.data;
    } catch (error) {
        console.error('Error creating producto:', error);
        throw error;
    }
}

export const generaNumeroAleatorio = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
