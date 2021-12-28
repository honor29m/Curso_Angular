/*
    ===== Código de TypeScript =====
*/
class PersonaNormal {

    constructor(
        public nombre: string,
        public direccion: string
    ) {} 
}

class Heroe extends PersonaNormal {
    // public alterEgo: string;
    // public edad: number;
    // public nombreReal: number;

    constructor( 
        public alterEgo: string,
        public edad?: number,
        public nombreReal?: string
    ) {
        super( nombreReal, 'New York, NY, USA')
    }


}

const ironman = new Heroe('Ironman', 45, 'Tony');
console.log(ironman);