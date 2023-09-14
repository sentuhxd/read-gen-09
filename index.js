// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const generateMarkdown = require('./utils/generateMarkdown.js')
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'username',
            message: 'What is your username ?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                }else {
                    console.log("Please enter a username");
                    return false;
                }
            }
        },

        {
            type: 'input',
            name: 'email',
            message: 'What is your email ?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                }else {
                    console.log("Please enter your email");
                    return false;
                }
            }
        },

        {
            type: 'input',
            name: 'title',
            message: 'What the title of your Project ?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                }else {
                    console.log("Please enter a Project Title");
                    return false;
                }
            }
        },

    ]);
};

const writeToFile = data => {
    fs.writeFile('README.md', data, err => {
        if (err) {
            console.log(err)
        } else {
            console.log('Your README was created')
        }

    })
};

const init = () => {
    return inquirer.prompt(questions);
}

init()
.then(userInput => {
    generateMarkdown(userInput);
})

.then(data => {
    return writeToFile(data);
})
.catch(err => {
    console.log(err);
})

