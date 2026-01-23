import { Pet } from "../Classes/Pet";

import dog1 from "../Recursos/perro1.avif";
import dog2 from "../Recursos/perro 3.jpg";
import dog3 from "../Recursos/perro 4.jpg";
import dog4 from "../Recursos/perro5.jpg";
import dog5 from "../Recursos/perro6.jpg";

import cat1 from "../Recursos/gato1.jpg";
import cat2 from "../Recursos/gato2.avif";
import cat3 from "../Recursos/gato3.jfif";
import cat4 from "../Recursos/gato4.jfif";
import cat5 from "../Recursos/gato5.jfif";

import hamster1 from "../Recursos/hamster1.jpg";
import hamster2 from "../Recursos/hamster2.avif";
import hamster3 from "../Recursos/hamster3.jfif";
import hamster4 from "../Recursos/hamster4.jfif";
import hamster5 from "../Recursos/hamster5.jfif";

import reptile1 from "../Recursos/reptil1.jfif";
import reptile2 from "../Recursos/reptil2.jfif";
import reptile3 from "../Recursos/reptil3.jfif";
import reptile4 from "../Recursos/reptil4.jfif";
import reptile5 from "../Recursos/reptil5.jfif";

export const petsDataList: Pet[] = [
    {id: '1', category: "Perros", name: "Max", breed: "Pit bull", age: 5, weight: 20, img: dog1},
    {id: '2', category: "Perros", name: "Rocky", breed: "---", age: 3, weight: 18, img: dog2},
    {id: '3', category: "Perros", name: "Bella", breed: "Cruza", age: 3, weight: 18, img: dog3},
    {id: '4', category: "Perros", name: "Bella", breed: "Cruza", age: 3, weight: 18, img: dog4},
    {id: '5', category: "Perros", name: "Bella", breed: "Cruza", age: 3, weight: 18, img: dog5},

    {id: '1', category: "Gatos", name: "Flynn", breed: "---", age: 7, weight: 12, img: cat1},
    {id: '2', category: "Gatos", name: "Maya", breed: "Cruza", age: 10, weight: 16, img: cat2},
    {id: '3', category: "Gatos", name: "Trouble", breed: "---", age: 2, weight: 20, img: cat3},
    {id: '4', category: "Gatos", name: "Sam", breed: "Cruza", age: 8, weight: 21, img: cat4},
    {id: '5', category: "Gatos", name: "Kevin", breed: "---", age: 6, weight: 13, img: cat5},
    
    {id: '1', category: "Hamsters", name: "speckless", breed: "Sirio", age: 1, weight: 2, img: hamster1},
    {id: '2', category: "Hamsters", name: "Berg katse", breed: "Ruso Enano", age: 2, weight: 3, img: hamster2},
    {id: '3', category: "Hamsters", name: "Bucky", breed: "Ruso Cambell", age: 3, weight: 4, img: hamster3},
    {id: '4', category: "Hamsters", name: "Blaster", breed: "Roborvski", age: 2, weight: 1, img: hamster4},
    {id: '5', category: "Hamsters", name: "Darwin", breed: "Sirio", age: 1, weight: 2, img: hamster5},

    {id: '1', category: "Reptiles", name: "Kaa", breed: "Coulubridae", age: 8, weight: 30, img: reptile1},
    {id: '2', category: "Reptiles", name: "Nagini", breed: "Pythonidae", age: 5, weight: 28, img: reptile2},
    {id: '3', category: "Reptiles", name: "Manda", breed: "Boidae", age: 12, weight: 40, img: reptile3},
    {id: '4', category: "Reptiles", name: "Jake", breed: "Elapidae", age: 3, weight: 15, img: reptile4},
    {id: '5', category: "Reptiles", name: "Basilisco", breed: "Viparidae", age: 4, weight: 24, img: reptile5},
];

export const getPetsCategory = (category : string): Pet[] => {
    return petsDataList.filter(pet => pet.category === category);
};