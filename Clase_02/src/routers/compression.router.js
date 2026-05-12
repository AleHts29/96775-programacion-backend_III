import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
    let string = `Hola Coders, soy una String ridículamente larga`;
    for (let i = 0; i < 5e4; i++) {
        string += `Hola Coders, soy una String ridículamente larga`;
    }

    res.send(string);
});

export default router;