// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const generateMarkdown = require('./utils/generateMarkdown')
const fs = require('fs');
const { default: CheckboxPrompt } = require('inquirer/lib/prompts/checkbox');
// TODO: Create an array of questions for user input Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
const questions = [
    {
        type: "input",
        message: "What is the title of your project?",
        name: "title"
    },
    {
        type: "input",
        message: "What does your project do?",
        name: "description"
    },
    {
        type: "input",
        message: "What do you need to install?",
        name: "installation"
    },
    {
        type: "input",
        message: "What would you use this for?",
        name: "usage"
    },
    // 2:10 video time on the hw demo
    {
        type: "list",
        message: "What kind of license is your project?",
        name: "license",
        choices: [
            {
                name: "MIT",
                short: "MIT",
                value: "[![License](https://img.shields.io/badge/license-MIT-green)](https://opensource.org/licenses/MIT)"
            },
            {
                name: "Apache",
                short: "Apache",
                value: "[![License](https://img.shields.io/badge/license-Apache-green)](https://opensource.org/licenses/Apache-2.0)"
            }
        ]
    },
    {
        type: "input",
        message: "What are the contributions?",
        name: "contributing"
    },
    {
        type: "input",
        message: "How do you test it?",
        name: "tests"
    },
    {
        type: "input",
        message: "What is your github username?",
        name: "github"
    },
    {
        type: "input",
        message: "What is your email?",
        name: "email"
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data);

}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(response=> {
            const md = generateMarkdown(response)
            writeToFile('README.md', md)
        })
}

// Function call to initialize app
init();
