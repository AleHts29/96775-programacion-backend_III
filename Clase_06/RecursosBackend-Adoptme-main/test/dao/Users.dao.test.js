import mongoose from "mongoose";
import UserDao from "../../src/dao/Users.dao.js"
import Assert from "assert"


const assert = Assert.strict;

// Conect to DB
mongoose.connect(`mongodb://localhost:27017/clase40-adoptme-test?retryWrites=true&w=majority`)



// escenario de test 
describe('Testing User DAO', () => {

    before(function () {
        this.userDao = new UserDao()
    })

    beforeEach(function () {
        this.timeout(5000)
        mongoose.connection.collections.users.drop()
    })

    // test 01
    it('El dao debe devolver los usuarios en formato de arreglo.', async function () {

        // Given
        // console.log(this.userDao); // instancia de la clase
        const isArray = true

        // Then
        const result = await this.userDao.get()
        // console.log("result: ", result);
        // console.log("result_02 - validacion: ", Array.isArray(result));


        // Asserts\
        assert.strictEqual(Array.isArray(result), isArray)
    })


    // test 02
    it('El Dao debe agregar el usuario correctamente a la BD.', async function () {
        // Given
        let mockUser = {
            first_name: "Usuario de prueba 1",
            last_name: "Apellido de prueba 1",
            email: "correodeprueba1@gmail.com",
            password: "123456"
        };

        // Then
        const result = await this.userDao.save(mockUser)
        // console.log(result);


        // Assert
        assert.ok(result._id)
    })



    afterEach(function () {
        mongoose.connection.collections.users.drop()
    })

})



// escenario de test 
describe('Testing_02 User DAO', () => {

    before(function () {
        this.userDao = new UserDao()
    })

    beforeEach(function () {
        this.timeout(5000)
        mongoose.connection.collections.users.drop()
    })

    // test 01
    it('El dao debe devolver los usuarios en formato de arreglo.', async function () {

        // Given
        // console.log(this.userDao); // instancia de la clase
        const isArray = true

        // Then
        const result = await this.userDao.get()
        // console.log("result: ", result);
        // console.log("result_02 - validacion: ", Array.isArray(result));


        // Asserts\
        assert.strictEqual(Array.isArray(result), isArray)
    })


    // test 02
    it('El Dao debe agregar el usuario correctamente a la BD.', async function () {
        // Given
        let mockUser = {
            first_name: "Usuario de prueba 1",
            last_name: "Apellido de prueba 1",
            email: "correodeprueba1@gmail.com",
            password: "123456"
        };

        // Then
        const result = await this.userDao.save(mockUser)
        // console.log(result);


        // Assert
        assert.ok(result._id)
    })



    afterEach(function () {
        mongoose.connection.collections.users.drop()
    })

})

// se ejecuta con: npx mocha test/dao/Users.dao.test.js

