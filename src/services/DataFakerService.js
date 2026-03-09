import { fakerES_MX} from '@faker-js/faker';

export const generateFakeData = (numItems) => {
    const fakeData = [];
    for (let i = 0; i < numItems; i++) {
        fakeData.push({
            id: i + 1,
            nombre: fakerES_MX.commerce.productName(),
            descripcion: fakerES_MX.commerce.productDescription(),
            precio: parseFloat(fakerES_MX.commerce.price()),
            sku: fakerES_MX.random.alphaNumeric(8).toUpperCase(),
        });
    }
    return fakeData;
}

export const generaFakeSku = () => {
    return fakerES_MX.random.alphaNumeric(8).toUpperCase();
}
