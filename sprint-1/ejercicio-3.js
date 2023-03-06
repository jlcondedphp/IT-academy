//Nivel 1/ Ejercicio 1

/*Crea una funció que retorni una Promise que invoqui la funció resolve() o reject() 
que rep. Invoca-la passant-li les dues funcions de manera que imprimeixin un missatge 
diferent depenent de si la Promise es resol o no.

//peliculas*/
peliculas = [
    {
        id: 1,
        titulo: 'Pelicula 1',
        any: 2015
    }, {
        id: 2,
        titulo: 'Pelicula 2',
        any: 2020
    }
];

//Comprobacion si no hay datos en el array
//peliculas = [];


const getPelis = () => {
    return new Promise((resolve, reject) => {
        if (peliculas.length === 0) {
            reject(new Error('No existen peliculas'));
        }
        resolve(peliculas);
    });
}

//En caso que no existan peliculas, devolvemos el error!!
getPelis()
    .then((peliculas) => console.log(peliculas))
    .catch(error => console.error(error.message));

//Nivel 1/ Ejercicio 2
/*Crea una arrow function que rebi un paràmetre i una funció callback i li passi a la funció un missatge o un 
altre (que s'imprimirà per consola) en funció del paràmetre rebut.*/


const miFuncion = (param, callback) => {
    console.log(`Estamos dentro de miFuncion con un parametro con valor ${param}`);
    callback(param);
}
const callback = (param) => {
    if (param > 0) {
        console.log('Hay un valor positivo')
    } else {
        console.log('Hay un valor negativo');
    }
}

miFuncion(10, callback);

//Nivel 2/ Ejercicio 1
/*Donats els objectes employees i salaries, crea una arrow function getEmployee() 
que retorni una Promise efectuant la cerca en l'objecte pel seu id.*/

let employees = [{
    id: 1,
    name: 'Linux Torvalds'
}, {
    id: 2,
    name: 'Bill Gates'
}, {
    id: 3,
    name: 'Jeff Bezos'
}];

let salaries = [{
    id: 1,
    salary: 4000
}, {
    id: 2,
    salary: 1000
}, {
    id: 3,
    salary: 2000
}];

const getEmployee = (id) => {
    return new Promise((resolve, reject) => {
        if (id > employees.length || id <= 0) {
            reject(new Error('No existe el empleado con ese Id'));
        }
        resolve(buscarId(id));
    });
}

const buscarId = (id) => {
    employees.forEach(o => {
        if (o.id === id) {
            return (o.name);
        }
    });
}
getEmployee(2)
    .then((employees))
    .catch(error => console.error(error.message));


/*Crea una altra arrow function getSalary() similar a l'anterior que rebi com a paràmetre un
 objecte employee i retorni el seu salari.*/

 const getSalary = (object) => {
    return new Promise((resolve,reject) => {
        resolve(buscarIdO(object.id));

    });
 }
 const buscarIdO = (id) => {
    salaries.forEach(o=>{
        if(o.id === id){
            return (o.salary);
    };
 });
}
 getSalary(employees[0])
            .then((employees))
            .catch(error => console.error(error.message));


/* Invoca la primera funció getEmployee() i després getSalary() niant l'execució de les dues promises de manera que
es retorni per la consola el nom de l'empleat/da i el seu salari.*/
 
const promesasEncadenadas = () => {
    return new Promise((resolve, reject) => {        
        resolve(getEmployee(2));
        resolve(getSalary(employees[1]));
    });
}

promesasEncadenadas()
                .then(employees => console.log(employees.name))
                .then(salaries => console.log(salaries.salary));
