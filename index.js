// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require ('inquirer');
 
const generateMarkdown = require('./utils/generateMarkdown.js')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: "What is your project's name? (Required)",
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log("Please enter your project's title.")
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: "Enter a brief description of your project. (Required)",
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log("Please enter a description.")
                return false;
            }
        }

    }, 
    {
        type: 'input', 
        name: 'install',
        message: 'Enter installation instructions if there are any.'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter usage information (Required)',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log("Enter usage information.")
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Enter contribution guidelines. (Required)',
        validate: contributionInput => {
            if (contributionInput) {
                return true;
            } else {
                console.log("Contribution info is required.")
                return false;
            }
        }
    }, 
    {
        type: 'input',
        name: 'test', 
        message: 'Enter any test instructions.'
    },
    {
        type: 'list',
        name: 'license', 
        message: 'What license is applicable to this project? (Default none)',
        choices: ['None', 'Apache', 'MIT']
    }
];


// TODO: Create a function to write README file
function writeToFile(info) {
    

    return new Promise((resolve, reject) => { 
        fs.writeFile(`READMEtest.md`, info, err => {
            if (err) {
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message: 'File created!'
            })
        })
    })
}

// TODO: Create a function to initialize app
function init(data) {
    return inquirer.prompt(questions)
}

// Function call to initialize app
init()
    .then(data => {
        return generateMarkdown(data)
    })
    .then(writeFile => {
        return writeToFile(writeFile)
    }).then(writeFileResponse => {
        console.log(writeFileResponse)
    })