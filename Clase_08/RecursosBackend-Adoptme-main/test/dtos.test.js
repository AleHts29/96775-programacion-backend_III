import { expect } from 'chai';
import UserDTO from '../src/dto/User.dto.js';
import PetDTO from '../src/dto/Pet.dto.js';

describe('UserDTO', () => {
    it('getUserTokenFrom debe combinar nombre y apellido y exponer role y email', () => {
        const user = {
            first_name: 'Alejandro',
            last_name: 'Huertas',
            role: 'admin',
            email: 'alejo@coder.com',
            password: 'noDebeAparecer'
        };
        const token = UserDTO.getUserTokenFrom(user);
        expect(token).to.deep.equal({
            name: 'Alejandro Huertas',
            role: 'admin',
            email: 'alejo@coder.com'
        });
        expect(token).to.not.have.property('password');
    });
});

describe('PetDTO', () => {
    it('getPetInputFrom debe normalizar una mascota completa con adopted en false', () => {
        const input = {
            name: 'Firulais',
            specie: 'perro',
            image: 'firulais.jpg',
            birthDate: '01-01-2020'
        };
        const pet = PetDTO.getPetInputFrom(input);
        expect(pet).to.deep.equal({
            name: 'Firulais',
            specie: 'perro',
            image: 'firulais.jpg',
            birthDate: '01-01-2020',
            adopted: false
        });
    });

    it('getPetInputFrom debe aplicar valores por defecto cuando faltan campos', () => {
        const pet = PetDTO.getPetInputFrom({});
        expect(pet.name).to.equal('');
        expect(pet.specie).to.equal('');
        expect(pet.image).to.equal('');
        expect(pet.birthDate).to.equal('12-30-2000');
        expect(pet.adopted).to.be.false;
    });
});
