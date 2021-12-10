interface Producto {
    desc: string;
    precio: number;
}

const telefono: Producto = {
    desc: 'Samsung A03S',
    precio: 165
}

const tablet: Producto = {
    desc: 'Galaxy Tab',
    precio: 200
}

function calcularIVA(prod: Producto[]):[number, number] {

    let total = 0;

    prod.forEach( ({precio}) => {
        total += precio;
    })

    return [total, total * 0.16];
}

const articulos = [ telefono, tablet ];
const [total, iva] = calcularIVA( articulos );
console.log('Total: ', total);
console.log('IVA: ', iva);