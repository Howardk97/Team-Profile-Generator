// Bring in other files
const inquirer = require('inquirer');
const Employee = require('./Employee');

inquirer.prompt([
    {
        type: 'input',
        name: 'school',
        message: "Enter the intern's school"
    },
])

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }
        getSchool() {
            return this.school;
        }

        getRole() {
            return "Intern";
        }
}

module.exports = Intern;