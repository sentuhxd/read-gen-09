const inquirer = require('inquirer');

const generateMarkdown = require('./utils/generateMarkdown.js');

const fs = require('fs');

const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project? ',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Enter a Title');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'githubUsername',
        message: 'What is your GitHub Username? ',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('Enter Github username');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address? ',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('Enter and Email');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is a description of your project?',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('Please enter what your project is!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please provide step-by-step installation instructions for your project. ',
        validate: installationInput => {
            if (installationInput) {
                return true;
            } else {
                console.log('Enter your installation instructions');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide instructions and examples for use.',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('Enter your use instructions');
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'license',
        message: 'Which license will you use for your project?',
        choices: ['agpl', 'apache', 'mit', 'no license']
    },
    {
        type: 'confirm',
        name: 'confirmContributers',
        message: 'Would you like to allow other developers to contribute?',
        default: true
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'Please provide guidelines for contributing. (Required)',
        when: ({ confirmContributers }) => {
            if (confirmContributers) {
                return true;
            } else {
                return false;
            }
        },
        validate: contributerInput => {
            if (contributerInput) {
                return true;
            } else {
                console.log('Please enter contributer guidelines!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'test',
        message: 'Please provide instructions on how to Test.',
        validate: testInput => {
            if (testInput) {
                return true;
            } else {
                console.log('Eenter your use test instructions');
                return false;
            }
        }
    }
];

// function to write README file
const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./utils/generated-README.md', fileContent, err => {
            if (err) {
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message: 'File created!'
            });
        });
    });
};

// function to prompt questions and store user inputs
const init = () => {

    return inquirer.prompt(questions)
    .then(Data => {
        return Data;
    })
}

// Function call to initialize app
init()
.then(Data => {
    console.log(Data);
    return generateMarkdown(Data);
})
.then(mdPage => {
    return writeFile(mdPage);
})
.then(writeFileResponse => {
    console.log(writeFileResponse.message);
})
.catch(err => {
    console.log(err);
})

