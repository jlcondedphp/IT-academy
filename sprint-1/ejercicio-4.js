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


const getEmployee = (id) =>{
    return new Promise ((resolve,reject) =>{
        setTimeout( () => {
             const employee = employees.find((employee) => employee.id == id);
             if(employee){
                resolve(employee.name);
             }else{
                reject('The id not exists');
            }
        },1000)
    })
}

const getSalary = (employee) =>{
    return new Promise((resolve,reject) =>{
        const salary = salaries.find(salary => salary.id == employee.id);
        if(salary){
            resolve({
                Nombre: employee.name,
                Salario: salary.salary
            });
        }else{
            reject('The employee with that id does not exists');
        }
    });
}

getEmployee(1)
        .then(employee => getSalary(employee))
        .catch(error => console.log(error));
/*

/* Ejercicio 2 

async function promesaTime() {
    let result = await new Promise(resolve => {
      setTimeout(() => {
        resolve('La promesa ha sido resuelta después de 5 segundos.');
      }, 5000);
    });
  
    return result;
  }
  promesaTime().then(result => {
    console.log(result);
    });


async function functionAsync(id){
    try{
        let employee = await getEmployee(id);
        let salary = await getSalary(employee);
        console.log(`The employee ${employee.name} has a salary of ${salary.Salary}`);
    }catch(error){
        console.log(error);
    }
    
}

functionAsync(1);*/

/*
function dobleRetraso(num) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(num * 2);
      }, 2000);
    });
  }
  
  async function sumadenumerosDoble(a, b, c) {
    const doubleA = await dobleRetraso(a);
    const doubleB = await dobleRetraso(b);
    const doubleC = await dobleRetraso(c);
    return doubleA + doubleB + doubleC;
  }

  dobleRetraso(10).then(result => console.log(result));
  sumadenumerosDoble(5, 5, 5).then(result => console.log(result));

  /*
  function dobleRetraso(num) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof num !== 'number') {
                reject(new Error('El parametro ha de ser un número'));
            } else {
                resolve(num * 2);
            }
        }, 2000);
    });
}

async function sumadenumerosDoble(num1, num2, num3) {
    try {
        const doubleNum1 = await dobleRetraso(num1);
        const doubleNum2 = await dobleRetraso(num2);
        const doubleNum3 = await dobleRetraso(num3);
        console.log(doubleNum1 + doubleNum2 + doubleNum3);
    } catch (error) {
        console.error(error);
    }
}


dobleRetraso(10).then(result => console.log(result));
sumadenumerosDoble(5, 5, 'uu').then(result => console.log(result));
