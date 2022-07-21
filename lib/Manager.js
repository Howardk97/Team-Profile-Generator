// Bring in files
const inquirer = require("inquirer");
const Employee = require('./Employee');

// Prompt user to enter office number
inquirer.prompt([
    {
        type: "input",
        name: "office_num",
        message: "Enter the manager's office number."
    }
]);

// Combine Employee class with Manager class
class Manager extends Employee {
    // pull parameters from Employee class
    constructor(name, id, email, office_num) {
        super(name, id, email);
        this.office_num = office_num;
    }

    // Gets the office number for the manager
    getOffice() {
        return this.office_num;
    }

    // Defines the manager role
    getRole() {
        return "Manager";
    } 
}

module.exports = Manager;