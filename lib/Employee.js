const inquirer = require("inquirer");

// Properties name, id, email
class Employee {
    getName() {
        return inquirer.prompt([
            {
                type: "input",
                name: "name",
                message: "What is the employee's name?"
            }
        ]);
    }

    getId() {}

    getEmail() {}

    getRole() {
        // returns Employee
    }
}

module.exports = Employee;