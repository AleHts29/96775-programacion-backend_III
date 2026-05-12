import express from 'express';
import suma from './suma.js';
import compression from 'express-compression';
import compressionRouter from './routers/compression.router.js'

const app = express();
const PORT = 8080;

// usamos compresion
// app.use(compression()) // <-- APLICAMOS EL MIDDLEWARE DE COMPRESION A TODAS LAS RUTAS

app.use(compression({
    brotli: { enabled: true, zlib: {} },
}))


// ENPOINTS
app.get('/', (req, res) => {
    res.send('¡Hola, mundo!');
});


app.use("/compression", compressionRouter);



app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);

    // let testPasados = 0;
    // let testEjecutado = 0
    // const testTotales = 4;

    // //Test 1: La función debe devolver null si algun parametro no es numérico.
    // const result = escenario_01(testPasados, testEjecutado);
    // testPasados = result.testPasados;
    // testEjecutado = result.testEjecutado;

    // //Test 2: La funcion debe devolver 0 si no se pasa ningún parámetro:
    // const result2 = escenario_02(testPasados, testEjecutado);
    // testPasados = result2.testPasados;
    // testEjecutado = result2.testEjecutado;

    // //Test 3: La función debe poder realizar la suma correctamente.
    // const result3 = escenario_03(testPasados, testEjecutado);
    // testPasados = result3.testPasados;
    // testEjecutado = result3.testEjecutado;


    // //Test 4: La función debe poder realizar la suma con cualquier cantidad de numeros.
    // const result4 = escenario_04(testPasados, testEjecutado);
    // testPasados = result4.testPasados;
    // testEjecutado = result4.testEjecutado;

    // // result
    // console.log(`Test ejecutados: ${testEjecutado}\nTest pasados: ${testPasados}\ntotalTest:${testTotales} `);

});


// Escenarios
const escenario_01 = (testPasados, testEjecutado) => {
    console.log('Test 1: La función debe devolver null si algun parametro no es numérico.');

    // Given
    const num1 = 5;
    const num2 = 'b';

    // Then
    const result = suma(num1, num2);

    // Assert
    if (result === null) {
        console.log('Test 1 pasado');
        testPasados++;
    } else {
        console.log(`Test 01: fallido, se recibio ${typeof result}, valor esperado null`);
    }

    testEjecutado++;
    return { testPasados, testEjecutado };
}

const escenario_02 = (testPasados, testEjecutado) => {
    console.log('Test 2: La función debe devolver 0 si no se pasa ningún parámetro.');

    // Given


    // Then
    const result = suma();

    // Assert
    if (result === 0) {
        console.log('Test 2 pasado');
        testPasados++;
    } else {
        console.log(`Test 02: fallido, se recibio ${typeof result}, valor esperado 0`);
    }

    testEjecutado++;
    return { testPasados, testEjecutado };
}

const escenario_03 = (testPasados, testEjecutado) => {
    console.log('Test 3: La función debe poder realizar la suma correctamente.');

    // Given
    const num1 = 5;
    const num2 = 10;

    // Then
    const result = suma(num1, num2);

    // Assert
    if (result === 15) {
        console.log('Test 3 pasado');
        testPasados++;
    } else {
        console.log(`Test 03: fallido, se recibio ${typeof result}, valor esperado 15`);
    }

    testEjecutado++;
    return { testPasados, testEjecutado };
}

const escenario_04 = (testPasados, testEjecutado) => {
    console.log('Test 4: La función debe poder realizar la suma con cualquier cantidad de numeros.');

    // Given
    const numeros = [1, 2, 3, 4, 5];

    // Then
    const result = suma(...numeros);

    // Assert
    if (result === 15) {
        console.log('Test 4 pasado');
        testPasados++;
    } else {
        console.log(`Test 04: fallido, se recibio ${typeof result}, valor esperado 15`);
    }

    testEjecutado++;
    return { testPasados, testEjecutado };
}   