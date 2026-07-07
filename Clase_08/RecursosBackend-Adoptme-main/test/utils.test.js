import { expect } from 'chai';
import { createHash, passwordValidation } from '../src/utils/index.js';

describe('Utils - Encriptación de contraseñas', () => {
    it('createHash debe devolver un hash distinto a la contraseña original', async () => {
        const password = 'coder123';
        const hash = await createHash(password);
        expect(hash).to.be.a('string');
        expect(hash).to.not.equal(password);
    });

    it('passwordValidation debe devolver true cuando la contraseña es correcta', async () => {
        const password = 'coder123';
        const hash = await createHash(password);
        const isValid = await passwordValidation({ password: hash }, password);
        expect(isValid).to.be.true;
    });

    it('passwordValidation debe devolver false cuando la contraseña es incorrecta', async () => {
        const hash = await createHash('coder123');
        const isValid = await passwordValidation({ password: hash }, 'contraseñaErronea');
        expect(isValid).to.be.false;
    });
});
