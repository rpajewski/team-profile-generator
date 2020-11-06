const inquirer = require('inquirer');
const { writeFile, copyFile } = require('./utils/generate-site.js');
const generatePage = require('./src/page-template');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const employeeQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is the employees name? (required)',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is the employees ID? (required)',
        validate: idInput => {
            if (idInput) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is the employees email? (required)',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'checkbox',
        name: 'role',
        message: 'Please select the employees role? (Check one)',
        choices: ['Manager', 'Engineer', 'Intern']
    }
];

const managerQuestions = [
    {
        type: 'input',
        name: 'officeNumber',
        message: 'What is the managers office number? (required)',
        validate: officeNumberInput => {
            if (officeNumberInput) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'confirm',
        name: 'role',
        message: 'Please confirm this employee is a Manager.',
        default: true
    }
];

const engineerQuestions = [
    {
        type: 'input',
        name: 'github',
        message: 'What is the engineers github username? (required)',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'confirm',
        name: 'role',
        message: 'Please confirm this employee is an Engineer.',
        default: true
    }
];

const internQuestions = [
    {
        type: 'input',
        name: 'school',
        message: 'Where did this intern go to school? (required)',
        validate: schoolInput => {
            if (schoolInput) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'confirm',
        name: 'role',
        message: 'Please confirm this employee is an Intern.',
        default: true
    }
];

const promptUser = () => {
    return inquirer.prompt(employeeQuestions)

    .then(employeeQuestions => {
        console.log(employeeQuestions)
        if (employeeQuestions.role.includes('Manager')) {
            return inquirer.prompt(managerQuestions);
        }
        else if (employeeQuestions.role.includes('Engineer')) {
            return inquirer.prompt(engineerQuestions);
        }
        else if (employeeQuestions.role.includes('Intern')) {
            return inquirer.prompt(internQuestions);
        }
        else {
            return console.log('Please select an employee role!');
        }
    })
    .then(employeeData => {
        console.log(employeeData)
        return employeeData;
    })
};

promptUser()
//   .then(employeeData => {
//     return generatePage(employeeData);
//   })
//   .then(pageHTML => {
//     return writeFile(pageHTML);
//   })
//   .then(writeFileResponse => {
//     console.log(writeFileResponse);
//     return copyFile();
//   })
//   .then(copyFileResponse => {
//     console.log(copyFileResponse);
//   })
//   .catch(err => {
//     console.log(err);
//   });