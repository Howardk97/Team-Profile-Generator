// Properties: github
const inquirer = require('inquirer');
const Employee = require('./Employee');

inquirer.prompt([
    {
        type: "input",
        name: "github",
        message: "Enter the engineer's GitHub username."
    }
]);

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }
    getGithub() {
        return this.github;
    }

    getRole() {
     return "Engineer";
    }
}

module.exports = Engineer;