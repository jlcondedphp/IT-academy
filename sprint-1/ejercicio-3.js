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






