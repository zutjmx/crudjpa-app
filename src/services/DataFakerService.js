import {fakerES_MX} from '@faker-js/faker';

export const generateFakeData = (numItems) => {
    const fakeData = [];
    for (let i = 0; i < numItems; i++) {
        fakeData.push({
            id: i + 1,
            nombre: fakerES_MX.commerce.productName(),
            precio: parseFloat(fakerES_MX.commerce.price()),
        });
    }
    return fakeData;
}
