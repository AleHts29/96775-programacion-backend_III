import { generateUser } from "../pkg/utils.js";

// debo importar un metodo generador de datos falsos, como fakerJS

export const getUsers = async (req, res) => {
    try {

        let users = [];

        for (let i = 0; i < 10; i++) {
            users.push(generateUser());
        }

        // llamo a un servicio que ya trae la data de la DB

        res.send({ status: 'success', payload: users });

    } catch (error) {
        console.log(error);
        res.status(500).send('Error interno del servidor');
    }
};