import express from 'express';
import userRouter from './routers/user.router.js';
import { generateUser } from './pkg/utils.js';

const app = express();
const PORT = 8080;



// ENPOINTS
app.get('/', (req, res) => {
    res.send('¡Hola, mundo!');
});


app.use('/api/users', userRouter);



app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);



    console.log("obj_process:", process.argv.slice(2));

    // // evento exit
    // const errorCode = 312; // Código de salida (0 para éxito, otro número para error)
    // process.exit(errorCode); // Salir con un código de éxito



    // console("HOLA MUNDO DESDE EL SERVIDOR");


});