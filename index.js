const inquirer = require('inquirer');
const { writeFile, copyFile } = require('./utils/generate-site.js');
const generatePage = require('./src/page-template');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// array to hold employees
const employees = [];

// employee questions that extend to manager, engineer and intern
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
        type: 'list',
        name: 'role',
        message: 'Please select the employees role? (Check one)',
        choices: ['Manager', 'Engineer', 'Intern']
    }
];

// manager question
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
    }
];

// engineer question
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
    }
];

// intern question
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
    }
];

// push new manager using manager class to employees array
const addManager = (employeeAnswers) => {
    // ask manager question
    return inquirer.prompt(managerQuestions)

    // create new manager object and assign variables
    .then(managerAnswers => {
        let manager = new Manager(employeeAnswers.name, employeeAnswers.id, employeeAnswers.email, managerAnswers.officeNumber, employeeAnswers.role);
        employees.push(manager);

        // ask to add another employee
        return addAnotherEmployee();
    })
};

// push new engineer using engineer class to employees array
const addEngineer = (employeeAnswers) => {
    // ask engineer question
    return inquirer.prompt(engineerQuestions)

    // create new engineer object and assign variables
    .then(engineerAnswers => {
        let engineer = new Engineer(employeeAnswers.name, employeeAnswers.id, employeeAnswers.email, engineerAnswers.github, employeeAnswers.role);
        employees.push(engineer);

        // ask to add another employee
        return addAnotherEmployee();
    })
};

// push new intern using intern class to employees array
const addIntern = (employeeAnswers) => {
    // ask intern question
    return inquirer.prompt(internQuestions)

    // create new intern object and assign variables
    .then(internAnswers => {
        let intern = new Intern(employeeAnswers.name, employeeAnswers.id, employeeAnswers.email, internAnswers.school, employeeAnswers.role);
        employees.push(intern);

        // ask to add another employee
        return addAnotherEmployee();
    })
};

// ask extended class questions then decide what role the employee has
const promptUser = () => {
    // employee questions
    return inquirer.prompt(employeeQuestions)

    // seperate employee by roles and ask role specific questions
    .then(employeeAnswers => {
        if (employeeAnswers.role === 'Manager') {
            return addManager(employeeAnswers);
        }
        else if (employeeAnswers.role === 'Engineer') {
            return addEngineer(employeeAnswers);
        }
        else if (employeeAnswers.role === 'Intern') {
            return addIntern(employeeAnswers);
        }
        else {
            return console.log('Please select an employee role!');
        }
    })
};

// prompts user if they want to add another employee or returns full array of employees
const addAnotherEmployee = () => {
    return inquirer.prompt([
        {
            type: 'confirm',
            name: 'confirmAddEmployee',
            message: 'Would you like to add another employee?',
            default: false
        }
    ])
    .then(addEmployee => {
        if (addEmployee.confirmAddEmployee) {
            return promptUser();
        } else {
            return createPage(employees);
        }
    })
};

// generate html once employees array is full
const createPage = employeeData => {
    console.log(`
    ==================================================
    Employees added, now generating your team profile!
    ==================================================
    `);
    return employeeData;
};

// initiate program, generate html, write html file, copy css style sheet and move new index and css to dist folder
promptUser()
    .then(employeeData => {
        return generatePage(employeeData);
    })
    .then(pageHTML => {
        return writeFile(pageHTML);
    })
    .then(writeFileResponse => {
        console.log(writeFileResponse);
        return copyFile();
    })
    .then(copyFileResponse => {
        console.log(copyFileResponse);
    })
    .catch(err => {
        console.log(err);
    });