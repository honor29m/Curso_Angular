/*
    ===== Código de TypeScript =====
*/
/*
    ===== Código de TypeScript =====
*/

let habilidades: string[] = ['bash', 'counter', 'heat'];

interface Personaje {
    nombre: string;
    hp: number;
    habilidades: string[];
    puebloNatal?: string;
}

const personaje: Personaje = {
    nombre: 'Honi',
    hp:100,
    habilidades: ['bash', 'counter', 'Healing']
}

personaje.puebloNatal = 'San Antero';

console.table(personaje);