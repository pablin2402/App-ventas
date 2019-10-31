const admin = require('firebase-admin');
admin.initializeApp();

const faker = require('faker');

const db = admin.firestore();

const fakeIt = () => {
    return db.collection('galletas').add({
        Alergenos: faker.internet.Alergenos(),
        descripcion: faker.internet.descripcion(),

        descripcioncorta: faker.hacker.descripcioncorta(),
        ingredientes: faker.hacker.ingredientes(),
        marca: faker.hacker.marca(),
        nombre: faker.hacker.nombre(),
        peso: faker.hacker.peso(),
        portada: faker.hacker.portada()




    });
}

Array(20).fill(0).forEach(fakeIt);