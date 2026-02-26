import { generateFakeData } from "./DataFakerService";

export const listProductos = () => {
    return generateFakeData(10); // Genera 10 productos falsos cada vez que se llama a la función
}           
