/*
    ===== Código de TypeScript =====
*/

interface  Reproductor {
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalles;
}

interface Detalles{
    autor: string;
    anio: number;
}

const reproductor: Reproductor = {
    volumen: 90,
    segundo: 45,
    cancion: 'Mess',
    detalles: {
        autor: 'Ed Sheeran',
        anio: 2022
    }
}
// Desestructuración objeto
const { volumen, segundo,cancion, detalles: { autor, anio } } = reproductor;
//const { autor, anio } = detalles;
/*
console.log( 'El segundo actual de: ', reproductor.segundo);
console.log( 'El volumen actual de: ', reproductor.volumen);
console.log( 'La cancion actual de: ', reproductor.cancion);
console.log( 'El autor es: ', reproductor.detalles.autor);
console.log( 'El año es: ', reproductor.detalles.anio);
*/

// Acceso a variables destructurados
/*
console.log( 'El segundo actual de: ', segundo);
console.log( 'El volumen actual de: ', volumen);
console.log( 'La cancion actual de: ', cancion);
console.log( 'El autor es: ', autor);
console.log( 'El año es: ', anio);
*/

// Desestructuración array

const dbz:string[] = ['Guku', 'Vegeta', 'Truns'];
//Se asigna por posiciones separado por comas ", , ,"
const [ val1, val2, val3 ] = dbz;

/*
console.log('Personaje 1: ', dbz[0]);
console.log('Personaje 2: ', dbz[1]);
console.log('Personaje 3: ', dbz[2]);
*/

console.log('Personaje 1: ', val1);
console.log('Personaje 2: ', val2);
console.log('Personaje 3: ', val3);