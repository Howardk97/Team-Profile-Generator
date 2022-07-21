const inquirer = require("inquirer");

inquirer.prompt([
    {
        type: "input",
        name: "name",
        message: "What is the employee's name?"
    },

    {
        type: "input",
        name: "ID",
        message: "What is the employee's ID number?"
    },

    {
        type: "input",
        name: "name",
        message: "What is the employee's email?"
    }
]);

// Properties name, id, email
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
         return 'Employee';
    }
}
// const Kim = new Employee('exampEmail@email', 'password', 'kimpossible')
// console.log(Kim)
// Kim.getEmail()

module.exports = Employee;