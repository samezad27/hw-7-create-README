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
        message: "What content is there?",
        name: "toc"
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
        type: "input",
        message: "What kind of license is your project?",
        name: "license"
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
        message: "What questions do you have?",
        name: "questions"
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
