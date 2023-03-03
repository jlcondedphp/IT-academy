//Ejercicio Nivel  1

//Ejercicio 1
//Crea una funció que mostri per consola el nom d'usuari/ària en invocar-la passant-li el nom com a paràmetre.

function pideNombre(nombre){
    console.log("Tu nombre es: " + nombre);
}
console.log('Ejercicio 1/1');
pideNombre('Jose Luis\n');

//Ejercicios Nivel 2

//Ejercicio 1
//Mostra per consola el nom i cognoms de l'usuari/ària mitjançant template literals, guardant-los en variables i 
//referenciant-les en la impressió del missatge.

function mostrarUsuario(nombre, apellidos) {
    return `El usuario introducido se llama ${nombre} ${apellidos}.`
}


console.log('Ejercicio 1/2');
console.log(mostrarUsuario('Jose Luis', 'Conde Diez'));

//Ejercicio 2
//Invoca una funció que retorni un valor des de dins d'una template literal.


function retornaValor(valor){
    console.log(`Esta funcion retorna un valor en template literal de ${valor}\n`);
}

console.log('Ejercicio 2/1');
retornaValor(222);



//Ejercicios Nivel 3

//Ejercicio 1
//Crea una matriu de deu funcions i emplena-la mitjançant un bucle de manera que cada funció compti del 0 al 9
//per la consola. Invoca cada funció de l'array iterativament. Haurà de mostrar-se per consola el compte del 0 al 9 deu vegades.

console.log('Ejercicio 3/1');
let array = [];

function f(){
    for(let i=0; i<10; i++){        
        console.log(i);       
    }
}

for(let i=0; i<10; i++){   
    console.log('Iteracion numero: ' + i);  
    array.push(f());       
}



//Ejercicio 2
//Crea una funció anònima autoinvocable igualada a una variable que mostri per consola el nom de l'usuari/ària a rebut com a paràmetre.

console.log('\nEjercicio 3/2');
const nombre = ((nombre) => {console.log(`Tu nombre es ${nombre}`);})('Jose Luis');
