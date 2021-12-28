/*
    ===== Código de TypeScript =====
*/
import { Producto, calcularIVA  } from "./06-desestructuracion-funcion";

const carritoCompras: Producto[] = [
    {
        desc: 'Telefono1',
        precio: 100
    },
    {
        desc: 'Telefono2',
        precio: 150
    },
];

const [total, iva] = calcularIVA( carritoCompras );
console.log( 'IVA', iva);