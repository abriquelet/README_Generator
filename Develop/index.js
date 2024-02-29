//Listed under dependencies
const inquirer = require('inquirer');
//want to use file system on user computer.
const fs = require('fs');
// TODO: Create an array of questions for user input
inquirer
    .prompt([
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
        validate: function(titleInput) { //adding these to force the user to add fields I believe to be important. 
            if (titleInput) {
                return true;
            } else {
                console.log('You must enter a title');
                return false;
            }
        }
    },
    {
        type: 'input',
        message: 'Please provide a description of your project:',
        name: 'description',
        validate: function(descriptionInput) {
            if (descriptionInput) {
                return true;
            } else {
                console.log('You must enter a description.');
                return false;
            }
        }
    },
    {
        type: 'input',
        message: 'Please add installation instructions if you deem them necessary:',
        name: 'install'
    },
    {
        type: 'input',
        message: 'Please add usage information/instructions for your project if you deem them necessary:',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'Please add contribution guidelines so fellow devs know how they will be permitted to contribute to your project:',
        name: 'contribution',
        validate: function(contributionInput) {
            if (contributionInput) {
                return true;
            } else {
                console.log('You must enter contribution guidelines, they are important for setting boundaries and must never be skipped.');
                return false;
            }
        }
    },
    {
        type: 'input',
        message: 'How to run tests you have written for your application (if any?)?',
        name: 'tests'
    },
    {
        type: 'list',
        message: 'Which license would you like to use?',
        name: 'license',
        choices: ['MIT', 'MPL-2.0', 'GPL', 'CC', 'MS-PL', 'none'] //
    },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'github',
        validate: function(githubInput) {
            if (githubInput) {
                return true;
            } else {
                console.log('If you are creating a README then you must have a GitHub, why not link it?');
                return false;
            }
        }
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
        validate: function(emailInput) {
            if (emailInput) {
                return true;
            } else {
                console.log('You must enter a valid email address.');
                return false;
            }
        }
    }
]);

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();