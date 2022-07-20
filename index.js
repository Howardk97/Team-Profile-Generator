// Import downloaded packages
const inquirer = require('inquirer');

const fs = require('fs');

// Define a method named promptUser
const promptUser = () => {
    return inquirer.prompt([
        // Ask for name, employee ID, email, and office number of manager
        {
            type: 'input',
            name: 'manager_name',
            message: "Enter the manager's name."
        },

        {
            type: 'input',
            name: 'manager_ID',
            message: "Enter the manager's employee ID."
        },

        {
            type: 'input',
            name: 'manager_email',
            message: "Enter the manager's email."
        },

        {
            type: 'input',
            name: 'manager_office_num',
            message: "Enter the manager's office number."
        },

        // Ask user if they would like to add an engineer, intern, or finish adding
        {
            type: 'checkbox',
            name: 'eng_int_finish_1',
            message: 'Would you like to add an engineer or intern next? Select finish to skip this step and generate webpage.',
            choices: ['Add Engineer', 'Add Intern', 'Finish'],
        },

        // If engineer selected
        {
            type: 'input',
            name: 'eng_name_1',
            message: "Enter the engineer's name."
        },

        {
            type: 'input',
            name: 'eng_ID_1',
            message: "Enter the engineer's ID",
        },

        {
            type: 'input',
            name: 'eng_email_1',
            message: "Enter the engineer's email."
        },

        {
            type: 'input',
            name: 'eng_github_1',
            message: "Enter the engineer's GitHub user name.",
        },

        {
            type:"checkbox",
            name:"eng_int_finish_2",
            message:"Would you like to add another engineer, add an intern, or finish adding team memebers?",
            choices: ["Add Engineer", "Add Intern", "Finish"]
        },

        {
            type: 'input',
            name: 'eng_name_2',
            message: "Enter the engineer's name."
        },

        {
            type: 'input',
            name: 'eng_ID_2',
            message: "Enter the engineer's ID",
        },

        {
            type: 'input',
            name: 'eng_email_2',
            message: "Enter the engineer's email."
        },

        {
            type: 'input',
            name: 'eng_github_2',
            message: "Enter the engineer's GitHub user name",
        },

        // If intern selected
        {
            type: 'input',
            name: 'int_name_1',
            message: "Enter the intern's name."
        },

        {
            type: 'input',
            name: 'int_ID_1',
            message: "Enter the intern's ID",
        },

        {
            type: 'input',
            name: 'int_email_1',
            message: "Enter the intern's email."
        },

        {
            type: 'input',
            name: 'int_school_1',
            message: "Enter the intern's school",
        },

        {
            type:"checkbox",
            name:"eng_int_finish_3",
            message:"Would you like to add another engineer, add an intern, or finish adding team memebers?",
            choices: ["Add Engineer", "Add Intern", "Finish"]
        },

        {
            type: 'input',
            name: 'int_name_2',
            message: "Enter the intern's name."
        },

        {
            type: 'input',
            name: 'int_ID_2',
            message: "Enter the intern's ID",
        },

        {
            type: 'input',
            name: 'int_email_2',
            message: "Enter the intern's email."
        },

        {
            type: 'input',
            name: 'int_school_2',
            message: "Enter the intern's school",
        },

        // Give option to exit and generate webpage
        {
            type: 'checkbox',
            name: 'finish',
            message: 'Would you like to add an engineer or intern next? Select finish to skip this step and generate webpage.',
            choices: ['Exit'],
        },
    ]);
    }

    // const engineer = `${eng_int_finish}`
    // If engineer is chosen
    // if(typeof `${eng_int_finish}` === 'string') {
    //     console.log('user input defined!');
    // }
            //Ask for name, ID, email, and GitHub username 

   // If intern is chosen
         //   Ask for name, ID, email, and school

    const generateHTML = ({manager_name, manager_email, manager_ID, manager_office_num, eng_name_1, eng_ID_1, eng_email_1, eng_github_1, eng_name_2, eng_ID_2, eng_email_2, eng_github_2, int_name_1, int_name_2, int_ID_1, int_ID_2, int_email_1, int_email_2, int_school_1, int_school_2 }) => {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile Generator</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link rel="stylesheet" href="./style.css">
    </head>
    <body>
    <header class="d-flex justify-content-center bg-danger">
        <h1 id='header-title' style='font-size: 30px' class="text-white m-4">My Team</h1>
    </header>

        <section id="card-container" class="d-flex justify-content-center flex-wrap align-items-stretch mt-5 flex-wrap align-items-center">
            <div class="card text-white bg-primary m-3" style="width: 18rem;">
                <div class="card-header">${manager_name}</div>
                <div id="job-title">Manager</div>
                <div class="card-body bg-light">
                    <ul class="list-group list-group-flush text-dark">
                        <p class="list-group-item rounded">ID: ${manager_ID}</p>
                        <!-- Link to TO email box with email inside -->
                        <li class="list-group-item rounded">email: ${manager_email}</li>
                        <li class="list-group-item rounded">office number: ${manager_office_num}</li>
                    </ul>
                </div>
            </div> 
            
            <div class="card text-white bg-primary m-3" style="width: 18rem;">
                <div class="card-header">${eng_name_1}</div>
                <div id="job-title">Engineer</div>
                <div class="card-body bg-light">
                    <ul class="list-group list-group-flush text-dark">
                        <li class="list-group-item rounded">ID: ${eng_ID_1}</li>
                        <!-- Link to TO email box with email inside -->
                        <li class="list-group-item rounded">Email: ${eng_email_1}</li>
                        <li class="list-group-item rounded">GitHub: <link hred="#">www.github.com/${eng_github_1}</link></li>
                    </ul>
                </div>
            </div>

            <div class="card text-white bg-primary m-3" style="width: 18rem;">
                <div class="card-header">${eng_name_2}</div>
                <div id="job-title">Engineer</div>
                <div class="card-body bg-light">
                    <ul class="list-group list-group-flush text-dark">
                        <li class="list-group-item rounded">ID: ${eng_ID_2}</li>
                        <!-- Link to TO email box with email inside -->
                        <li class="list-group-item rounded">Email: ${eng_email_2}</li>
                        <li class="list-group-item rounded">GitHub: <link hred="#">www.github.com/${eng_github_2}</link></li>
                    </ul>
                </div>
            </div>

            <div class="card text-white bg-primary m-3" style="width: 18rem;">
                <div class="card-header">${int_name_1}</div>
                <div id="job-title">Intern</div>
                <div class="card-body bg-light">
                    <ul class="list-group list-group-flush text-dark">
                        <li class="list-group-item rounded">ID: ${int_ID_1}</li>
                        <!-- Link to TO email box with email inside -->
                        <li class="list-group-item rounded">Email: ${int_email_1}</li>
                        <li class="list-group-item rounded">School: ${int_school_1}</li>
                    </ul>
                </div>
            </div>

            <div class="card text-white bg-primary m-3" style="width: 18rem;">
                <div class="card-header">${int_name_2}</div>
                <div id="job-title">Intern</div>
                <div class="card-body bg-light">
                    <ul class="list-group list-group-flush text-dark">
                        <li class="list-group-item rounded">ID: ${int_ID_2}</li>
                        <!-- Link to TO email box with email inside -->
                        <li class="list-group-item rounded">Email: ${int_email_2}</li>
                        <li class="list-group-item rounded">School: ${int_school_2}</li>
                    </ul>
                </div>
            </div>
        </section>
        <script src="./index.js"></script>
    </body>
    </html>`;
    }

    // Use fs to prompt user when application runs
    const init = () => {
        promptUser()
        .then((answers) => fs.writeFileSync('./dist/index.html', generateHTML(answers)))
        .then(() => console.log('Successfully wrote to html file!'))
        .then((err) => console.error(err));
    };

    init();

    // Attach each input username to each github link

    // Attach link to page

    // Display content on html when user is ready to generate webpage




