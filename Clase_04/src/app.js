import express from 'express';
import config from './config/config.js';
import MongoSingleton from './config/mongodb-singleton.js';
import cluster from 'cluster';
import { cpus } from 'os';


//import Routers
//Performance test:
import performanceRouter from './routers/performance-test.router.js';
import sessionRouter from './routers/sessions.router.js'
import userRouter from './routers/users.router.js';

// **BASE
import logger from './config/logger_BASE.js';


console.log("Preguntar si es el cluster es primario:");
console.log(cluster.isPrimary);
if (cluster.isPrimary) {
    console.log("Identificamos el ProcessId Padre: " + process.pid);
    const numeroProcesadores = cpus().length;
    console.log(`NumeroProcesadores en esta maquina: ${numeroProcesadores}`);

    // cluster.fork(); // <-- crea un proceso hijo, que es una copia del proceso padre, y ejecuta el mismo código. El proceso hijo tendrá un ProcessId diferente al del proceso padre.

    for (let i = 0; i < numeroProcesadores; i++) {
        cluster.fork();
    }


} else {
    console.log("Este es un proceso Fork! Soy un worker!!");
    console.log(`Soy un proceso worker con el id: ${process.pid}`);



    // import { addLogger } from './config/logger_CUSTOM.js';

    const app = express();

    //JSON settings:
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    // **BASE

    logger.http("Iniciando servidor...");

    //Declare routers:
    app.use("/api/performance", performanceRouter);
    app.use("/api/session", sessionRouter);
    app.use("/api/user", userRouter);

    // **BASE

    logger.warn("El servidor se ha iniciado, pero no se han declarado las rutas. Agrega las rutas correspondientes para que el servidor funcione correctamente.");
    logger.error("Si el servidor se ha iniciado pero no funciona correctamente, revisa la configuración de las rutas y los controladores para asegurarte de que todo esté en orden.");


    const SERVER_PORT = config.port;
    app.listen(SERVER_PORT, () => {
        // console.log("Servidor escuchando por el puerto: " + SERVER_PORT);
        logger.info(`Servidor escuchando por el puerto: ${SERVER_PORT}`);
    });

    const mongoInstance = async () => {
        try {
            await MongoSingleton.getInstance();
        } catch (error) {
            console.error(error);
        }
    };
    mongoInstance();
}







