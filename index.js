// Import downloaded packages
const inquirer = require('inquirer');

const fs = require('fs');

// Define a method named promptUser
const promptUser = () => {
    console.log(fs.existsSync(  ));

    return inquirer.prompt([
        // Ask for name, employee ID, email, and office number of manager
        {
            type: 'input',
            name: 'manager_name',
            message: "Enter the manager's name."
        },

        {
            type: 'input',
            name: 'manager_employee_ID',
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
            name: 'eng_int_finish',
            message: 'Would you like to add an engineer or intern next? Select finish to skip this step and generate webpage.',
            choices: ['Add Engineer', 'Add Intern', 'Finish'],
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

    // const engineer = `${}`
    // If engineer is chosen
    // if() {}
            // Ask for name, ID, email, and GitHub username 

    // If intern is chosen
            // Ask for name, ID, email, and school

    const generateHTML = ({}) =>
  `<!DOCTYPE html>
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

        <section id="card-container" class="d-flex justify-content-center flex-wrap align-items-center">
            <div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
                <div class="card-header"></div>
                <div id="job-title"></div>
                <div class="card-body bg-light">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item rounded">Cras justo odio</li>
                        <!-- Link to TO email box with email inside -->
                        <li class="list-group-item rounded">Dapibus ac facilisis in</li>
                        <li class="list-group-item rounded">Vestibulum at eros</li>
                    </ul>
                </div>
            </div> 
            
            <div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
                <div class="card-header"></div>
                <div id="job-title"></div>
                <div class="card-body bg-light">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item rounded">Cras justo odio</li>
                        <!-- Link to TO email box with email inside -->
                        <li class="list-group-item rounded">Dapibus ac facilisis in</li>
                        <li class="list-group-item rounded">Vestibulum at eros</li>
                    </ul>
                </div>
            </div>

            <div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
                <div class="card-header"></div>
                <div id="job-title"></div>
                <div class="card-body bg-light">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item rounded">Cras justo odio</li>
                        <!-- Link to TO email box with email inside -->
                        <li class="list-group-item rounded">Dapibus ac facilisis in</li>
                        <li class="list-group-item rounded">Vestibulum at eros</li>
                    </ul>
                </div>
            </div>

            <div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
                <div class="card-header"></div>
                <div id="job-title"></div>
                <div class="card-body bg-light">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item rounded">Cras justo odio</li>
                        <!-- Link to TO email box with email inside -->
                        <li class="list-group-item rounded">Dapibus ac facilisis in</li>
                        <li class="list-group-item rounded">Vestibulum at eros</li>
                    </ul>
                </div>
            </div>

            <div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
                <div class="card-header"></div>
                <div id="job-title"></div>
                <div class="card-body bg-light">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item rounded">Cras justo odio</li>
                        <!-- Link to TO email box with email inside -->
                        <li class="list-group-item rounded">Dapibus ac facilisis in</li>
                        <li class="list-group-item rounded">Vestibulum at eros</li>
                    </ul>
                </div>
            </div>
        </section>
        <script src="./index.js"></script>
    </body>
    </html>`;

    // Use fs to prompt user when application runs
    const init = () => {
        promptUser()
        .then((answers) => fs.writeFileSync('index.html', generateHTML(answers)))
        .then((err) => console.error(err));
    };

    init()

    console.log(`${finish}`);

    // console.log(`${eng_int_finish}`);

    // Attach each input username to each github link

    // Attach link to page

    // Display content on html when user is ready to generate webpage




