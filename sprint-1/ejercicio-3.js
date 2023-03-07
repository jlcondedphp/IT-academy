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

/*
const getEmployee = (id) => {
    return new Promise((resolve,reject) =>{
            let empleado = employees.find(item => item.id == id);

            if(!empleado){
                reject(new Error(`El id ${id} no es un id valido`));
            }else{
                resolve(`El nombre del empleado es ${empleado.name}`);
            }   
    });
}
getEmployee(1)
        .then(respuesta => console.log(respuesta))
        .catch(error => console.error(error.message))


        
/*Crea una altra arrow function getSalary() similar a l'anterior que rebi com a paràmetre un
 objecte employee i retorni el seu salari.

 const getSalary = (obj) => {
    return new Promise((resolve,reject) => {
        let salario = salaries.find(item => item.id == obj.id);       
        console.log(salario);
        if(!salario){
            reject(new Error(`No es un id valido`));       
        }else{ 
            resolve(`El salario del empleado es ${salario.salary}`);                 
        }     
    });
 }

 getSalary(employees[2])
            .then((salario => console.log(salario)))
            .catch(error => console.error(error));


/* Invoca la primera funció getEmployee() i després getSalary() niant l'execució de les dues promises de manera que
es retorni per la consola el nom de l'empleat/da i el seu salari.*/

 const getEmployee2= (id) => {
    return new Promise((resolve,reject) =>{
            let empleado = employees.find(item => item.id == id);
            
            if(empleado){
                resolve(`El nombre del empleado es ${empleado.name}`);                
            }else{                
                reject(new Error(`El id ${id} no es un id valido`));
            }   
    });
}

const getSalary2 = (obj) => {
    return new Promise((resolve,reject) => {
        let salario = salaries.find(salario => salario.id === obj.id);        

        if(salario){
            resolve(`El nombre del empleado es  ${obj.name} y su salario es ${salario.salary}`);                
        }else{ 
            reject(new Error(`No es un id valido`));              
        }     
    });
 }

 getSalary2(getEmployee2[1])
        .then(respuesta => getEmployee2(respuesta))
        .catch(error => console.error(error));

 /*getSalary2(getEmployee2(1))
            .then(empleado => getSalary2(empleado))
            //.then((salario=> console.log(salario)))
            .catch(error => console.error(error.message));

/*const getSalary2 = employee => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let salary = salaries.find(salary => salary.id === employee.id);
            if (salary) {
                resolve({
                    Nombre: employee.name,
                    Salario: salary.salary
                });
            } else {
                reject(`No se ha encontrado dato alguno sobre el ID: ${employee.id}`);
            }
        }, 1000);
    });
};
 
getEmployee2(2)
    .then(employee => getSalary2(employee))
    .then(employeeWithSalary => console.log(employeeWithSalary))*/
  
/*
getEmployee(5)
    .then(employee => getSalary(employee))
    .then(result => console.log(`El nombre del empleado es ${result.Nombre} y su salario es ${result.Salario}`))
    .catch(error => {console.error(`Ha ocurrido un error: ${error}`);})*/
