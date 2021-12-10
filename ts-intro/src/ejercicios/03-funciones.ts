/*
    ===== Código de TypeScript =====
*/

function sumar( a:number, b:number):number {
    return a + b;
}

const sumarFechla = (a:number, b:number):number => {
    return a + b;
}

function multiplicar(numero: number, otroNumero?: number, base: number = 2):number {
    return numero * base;
}

interface PersonajePA {
    nombre: string;
    pv: number;
    mostrarHp: () => void;
}

function curar(personaje: PersonajePA, curarX): void {
    personaje.pv += curarX;
}

const nuevoPersonaje: PersonajePA = {
    nombre: 'Honi',
    pv: 50,
    mostrarHp() {
        console.log( this.pv );
    }
}

curar( nuevoPersonaje, 20);

nuevoPersonaje.mostrarHp();