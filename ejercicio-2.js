/*Ejercicio 1
Mostra per la consola el resultat d'una arrow function autoinvocable que sumi dos nombres.*/

const suma = (((num1, num2) => num1 + num2)(6, 3));
console.log(suma);



/*Ejercicio 2
Crea una arrow function que, rebent un paràmetre, retorni un objecte amb un atribut
que tingui com a valor el paràmetre rebut.*/

const miObjeto = param => ({ atributo: param });
const obj = miObjeto("Este objeto se ha creado con el parametro recibido como argumento");
console.log(obj);


/* Ejercicio 3
Crea una classe "Persona" que rebi un paràmetre 'nom' en ser instanciada. La classe inclourà
un mètode dirNom que imprimeixi per consola el paràmetre 'nom'. Invoca el mètode 
dirNom des de fora de la classe.*/

class Persona {
    constructor(nom) {
        this.nombre = nom;
    }

    dirNom() {
        return `El nombre de la persona es ${this.nombre}`;
    }
}

let p1 = new Persona("Manolo");

console.log(p1.dirNom());


/* Ejercicio 4
Escriu una function creadora d'objectes que faci instàncies d'una classe abstracta. Invoca-la 
amb diferents definicions.*/

function crearObjecto(base, ...args) {
    function miFuncion() { }
    miFuncion.prototype = base.prototype;

    const miObjeto = new miFuncion();
    base.apply(miObjeto, args);
    return miObjeto;
}

// Definición de Ciudadano
function Ciudadano(dni, cPostal, poblacion) {
    this.dni = dni;
    this.cPostal = cPostal;
    this.poblacion = poblacion;
}
console.log('\nDefinición de ciudadano');
Ciudadano.prototype.censar = function () {
    console.log(`DNI: ${this.dni} con codigo Postal ${this.cPostal} y reside en ${this.poblacion}.`);
};

const c1 = crearObjecto(Ciudadano, "46549818A", 50, "Barcelona");
const c2 = crearObjecto(Ciudadano, "45865446B", 18, "Madrid");
c1.censar();
c2.censar();

console.log('\nDefinición de Profesión');
function Profesion(nombre, apellido, titulo) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.titulo = titulo;

}

console.log('\nDefinición de Conductor');
function Conductor(nombre, permiso) {
    this.nombre = nombre;
    this.permiso = permiso;
}

Conductor.prototype.conducir = function () {
    console.log(`El conductor ${this.nombre} tiene el permiso de conduccion tipo ${this.permiso}.`);
};

const cond1 = crearObjecto(Conductor, "Jose Luis", "B1");
const cond2 = crearObjecto(Conductor, "Miguel", "C1");
cond1.conducir();
cond2.conducir();

console.log('\nDefinición de Conductor');
Profesion.prototype.profesion = function () {
    console.log(`El alumno ${this.nombre} ${this.apellido} será ${this.titulo}.`);
};

const al1 = crearObjecto(Profesion, "Jose Luis", "Conde", "programador");
const al2 = crearObjecto(Profesion, "Miguel", "Hernandez", "administrativo");
al1.profesion();
al2.profesion();
