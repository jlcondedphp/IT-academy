//Level 1 /Exercise 1

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
        const employee = employees.find(employee => employee.id == id);
        if (employee) {
            resolve(employee);
        } else {
            reject('The employee with this id not exists');
        }
    });
}

const getSalary = (employee) => {
    return new Promise((resolve, reject) => {
        const salary = salaries.find(salary => salary.id == employee.id);
        if (salary) {
            resolve({
                Name: employee.name,
                Salary: salary.salary
            });
        } else {
            reject("The employee with this id not exists");
        }
    })
}

async function functionAsync(id) {
    let employee = await getEmployee(id);
    let salary = await getSalary(employee);
    console.log(`The employee ${employee.name} has a salary of ${salary.Salary}€`);
}

functionAsync(1);



//Level 1 /Exercise 2

async function asyncPromise() {
    let promise = await new Promise(resolve => {
        setTimeout(() => {
            resolve("The promise has been resolve en two seconds");
        }, 2000);
    });
    return promise;
}

asyncPromise()
    .then(promise => console.log(promise));





//Level 2 /Exercise 1

async function functionDouble(num) {
    let double = await new Promise(resolve => {
        setTimeout(() => {
            resolve(num * 2);
        }, 2000);
    });
    return double;
}


async function functionTreble(num1, num2, num3) {
    const doubleNum1 = await functionDouble(num1);
    const doubleNum2 = await functionDouble(num2);
    const doubleNum3 = await functionDouble(num3);
    const sumDouble = doubleNum1 + doubleNum2 + doubleNum3;
    return sumDouble;
}

functionDouble(5)
    .then(number => console.log(number));

functionTreble(2, 3, 4)
    .then(sumNums => console.log(sumNums));



//Level 3 /Exercise 1

async function functionTreble(num1, num2, num3) {
    try {
        const doubleNum1 = await functionDouble(num1);
        const doubleNum2 = await functionDouble(num2);
        const doubleNum3 = await functionDouble(num3);
        const sumDouble = doubleNum1 + doubleNum2 + doubleNum3;
        return sumDouble;
    } catch (error) {
        console.error(error);
    }
}

functionDouble(5)
    .then(number => console.log(number));

functionTreble(2, 'b', 6)
    .then(sumNums => console.log(sumNums))
