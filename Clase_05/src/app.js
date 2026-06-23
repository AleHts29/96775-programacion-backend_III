import express from 'express';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUIExpress from 'swagger-ui-express'

import usersRouter from './routes/users.router.js';
import petsRouter from './routes/pets.router.js';
import adoptionsRouter from './routes/adoption.router.js';
import sessionsRouter from './routes/sessions.router.js';

const app = express();
const PORT = process.env.PORT || 8081;
const connection = mongoose.connect(`mongodb://localhost:27017/clase39-adopme?retryWrites=true&w=majority`)

// configuracion de swagger
const swaggerOptions = {
    definition: {
        openapi: "3.0.1",
        info: {
            title: "AdopMe API",
            description: "API para la gestion de adopciones de mascotas"
            }
    },
    apis: ["./src/docs/**/*.yaml"]
}

const specs = swaggerJSDoc(swaggerOptions);
app.use('/api/docs', swaggerUIExpress.serve, swaggerUIExpress.setup(specs))


app.use(express.json());
app.use(cookieParser());

app.use('/api/users', usersRouter);
app.use('/api/pets', petsRouter);
app.use('/api/adoptions', adoptionsRouter);
app.use('/api/sessions', sessionsRouter);

app.listen(PORT, () => console.log(`Listening on ${PORT}`))
