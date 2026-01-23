export interface Pet {
    id: string;
    category: 'Perros' | 'Gatos' | 'Hamsters' | 'Reptiles';
    name: string;
    breed: string;
    age: number;
    weight: number;
    img: string;
}