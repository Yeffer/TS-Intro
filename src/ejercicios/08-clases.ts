/*
    ===== Código de TypeScript =====
*/
// Clases 

class PersonaNormal {
    constructor(
        public nombre: string,
        public direccion: string
    ){}
}

class Heroe extends PersonaNormal {
    /*
    public alterEgo: string;
    public edad:number;
    public nombreReal: number;

    constructor( alterEgo: string){
        this.alterEgo = alterEgo;
    }
    */
    constructor( 
        public alterEgo: string,
        public edad: number,
        public nombreReal: string 
    ){ 
        super( nombreReal, 'New York, USA');
    }
}

const ironman = new Heroe('Ironman', 34, 'Tony');

console.log(ironman);