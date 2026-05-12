// export default (num1, num2) => {

//     if (num1 === undefined && num2 === undefined) {
//         return 0;
//     }
//     // if (!num1 || !num2) return 0;

//     if (typeof num1 !== 'number' || typeof num2 !== 'number') {
//         return null;
//     }

//     return num1 + num2;

// }


export default (...numeros) => {
    console.log("numeros_in:", numeros);


    //Test 2: La funcion debe devolver 0 si no se pasa ningún parámetro:
    if (numeros.length === 0) {
        return 0;
    }


    // Test_01: La función debe devolver null si algun parametro no es numérico.
    for (let index = 0; index < numeros.length; index++) {
        if (typeof numeros[index] !== 'number') {
            return null;
        }
    }

    //Test 3-4: La función debe poder realizar la suma correctamente.
    let result = 0;
    for (let index = 0; index < numeros.length; index++) {
        result += numeros[index];
    }
    return result;
}