/*
    ===== Código de TypeScript =====
*/
// Encademaniento 

interface Pasajero {
    nombre: string;
    hijos?: string[];
}
const pasajero1: Pasajero = {
    nombre: 'Adriana', 
}
const pasajero2: Pasajero = {
    nombre: 'Melisa',
    hijos: ['Natalia', 'Gabriela']
}

function imprimirHijos(pasajero: Pasajero): void{
    const cuantoshijos = pasajero.hijos?.length || 0;
    console.log(cuantoshijos);
}

imprimirHijos(pasajero1);

