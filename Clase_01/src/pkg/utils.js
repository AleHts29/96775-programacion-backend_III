import { faker } from '@faker-js/faker';

// esto usa FAKEJS, una librería para generar datos de prueba
export const generateUser = () => {
    let numberOfProducts = parseInt(Math.random() * 5) + 1; // genero un número aleatorio de productos entre 1 y 5 para cada usuario
    const roles = ['admin', 'usuario', 'editor', 'invitado'];
    const product = [];

    // genero un número aleatorio de productos para cada usuario
    for (let i = 0; i < numberOfProducts; i++) {
        product.push(generateProduct())
    }


    return {
        id: faker.database.mongodbObjectId(),
        name: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: faker.internet.email(),
        birthdate: faker.date.birthdate(),
        products: product,
        roles: roles[Math.floor(Math.random() * roles.length)] // asigno un rol aleatorio a cada usuario
    }
}

export const generateProduct = () => {
    return {
        id: faker.database.mongodbObjectId(),
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        description: faker.commerce.productDescription(),
        category: faker.commerce.department(),
        stock: faker.random.numeric(1),
        thumbnail: faker.image.image()
    }
}


/*

cosnt newUser = {
    name: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email(),
    password: faker.internet.password()
    products: [
            {prod_01},
            {prod_02},
            {prod_03},
            {prod_04},
    ],
    roles: [
        'user',
        'admin'
    ]
}

*/




/// 2da parte
// process.on('exit', (code) => {
//     console.log('El proceso ha finalizado con el código:', code);
// });

// process.on('uncaughtException', (error) => {
//     console.log('Error no capturado:', error);
//     process.exit(1); // Salir con un código de error
// });

// process.on('message', (message) => {
//     console.log('Mensaje recibido del proceso padre:', message);
//     // Aquí puedes manejar el mensaje recibido y realizar acciones en consecuencia
// });




/*
process Padre:12345 -> 
    01_process hijo
    02_process hijo
    03_process hijo
    n_process hijo



*/
