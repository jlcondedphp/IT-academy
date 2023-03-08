//Level 1/ Exercise 1

 films= [
    {
        id: 1,
        title: 'Film 1',
        year: 2015
    }, {
        id: 2,
        title: 'Film 2',
        year: 2020
    }
];

//Checking empty films
//films= [];

const getFilms = () => {
    return new Promise((resolve, reject) => {
        if (films.length === 0) {
            reject(new Error('There are no movies'));
        }
        resolve(films);
    });
}

getFilms()
    .then((films) => console.log(films))
    //In case of error return the error
    .catch(error => console.error(error.message));


//Level 1/ Exercise 2

const miFunction = (param, callback) => {
    console.log(`We are within miFunction with a parameter value ${param}`);
    callback(param);
}
const callback = (param) => {
    if (param > 0) {
        console.log('There is a positive value')
    } else {
        console.log('There is a negative value');
    }
}

miFunction(-5, callback);

//Level 2/ Exercise 1

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
        const employee = employees.find( employee => employee.id == id);
        if (employee) {
            resolve(employee.name);            
        } else {
            reject('The employee with that id does not exists');            
        }
    });
}

getEmployee(2)
    .then(employee => console.log(employee))
    .catch(error => console.error(error));



//Level 2/ Exercise 2
const getSalary = (employee) => {
    return new Promise((resolve, reject) => {

        const salary = salaries.find( salary => salary.id == employee.id);

        if (salary) {
            resolve(salary.salary);                    
        }
        else {
            reject('The employee with that id does not exists');           
        }
    });
}

getSalary(employees[1])
    .then(salary => console.log(salary))
    .catch(error => console.error(error));


//Level 2/ Exercise 3

const getEmployee2 = (id) =>{
    return new Promise((resolve,reject) =>{
        const employee = employees.find(employee => employee.id == id);
        if(employee){
            resolve(employee);
        }else{
            reject("No existe ese id");
        }
    });
}

const getSalary2 = (employee) =>{
    return new Promise((resolve,reject) =>{
        const salary = salaries.find(salary => salary.id == employee.id);
        if(salary){
            resolve({
                Nombre: employee.name,
                Salario: salary.salary
            });
        }else{
            reject('No existe el id');
        }
    });
}

getEmployee2(1)
        .then(employee => getSalary2(employee))
        .then(employeeSalary => console.log(employeeSalary))
        


//Level 3/ Exercise 1

getEmployee(1)
        .then(employee => console.log(employee))
        .catch(error => console.error(error));
