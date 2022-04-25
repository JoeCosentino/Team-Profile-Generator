const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const fs = require('fs');
const employeeArr = [];

function getManagerInfo() {
    return inquirer.prompt([{
            type: 'text',
            name: 'name',
            message: 'What is your name?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your name!');
                    return false;
                }
            }
        },
        {
            tpye: 'text',
            name: 'employeeId',
            message: 'What is your employee ID?',
            validate: employeeIdInput => {
                if (employeeIdInput) {
                    return true;
                } else {
                    console.log('Please enter your employee ID');
                    return false;
                }
            }
        },
        {
            type: 'text',
            name: 'email',
            message: 'Please enter your email address.',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter your email address!');
                    return false;
                }
            }
        },
        {
            tpye: 'text',
            name: 'officeNumber',
            message: 'Please enter your office number',
            validate: officeNumberInput => {
                if (officeNumberInput) {
                    return true;
                } else {
                    console.log('Please enter your office number!');
                    return false;
                }
            }
        }])
        .then((data) => {
            console.log(data);
            return data;
        })
        .then(({ name, email, employeeId, officeNumber }) => {
            let manager = new Manager(name, email, employeeId, officeNumber);
            employeeArr.push(manager);

            getMenuSelection();
        });
}       

function getMenuSelection() {
    return inquirer.prompt([{
        type: 'list',
        name: 'action',
        message: 'Choose an option to continue',
        choices: ['Engineer', 'Intern', 'Finish']
    }])
    .then(({ action }) => {
        if(action === 'Engineer') {
            getEnginnerInfo();
        } else if (action === 'Intern') {
            getInternInfo();
        } else {
            finishApp();
        }
    });
}

function getEnginnerInfo() {
    return inquirer.prompt([{
        type: 'text',
        name: 'name',
        message: 'What is your name?',
        validate: nameInputEng => {
            if (nameInputEng) {
                return true;
            } else {
                console.log('Please enter your name!');
                return false;
            }
        }
    },
    {
        type: 'text',
        name: 'employeeId',
        message: 'What is your employee ID?',
        validate: engIdInput => {
            if (engIdInput) {
                return true;
            } else {
                console.log('Please enter your employee ID!');
                return false;
            }
        }
    },
    {
        tpye: 'text',
        name: 'email',
        message: 'What is your email address?',
        validate: engEmailInput => {
            if (engEmailInput) {
                return true;
            } else {
                console.log('Please enter your email address!');
                return false;
            }
        }
    },
    {
        type: 'text',
        name: 'gitHubUserName',
        message: 'what is your GitHub username?',
        validate: engGitHubInput => {
            if (engGitHubInput) {
                return true;
            } else {
                console.log('Please enter your GitHub username!');
                return false;
            }
        }
    }
    ])
    .then(({ name, email, employeeId, gitHubUsername }) => {
        let engineer = new Engineer(name, email, employeeId, gitHubUsername);
        employeeArr.push(engineer);

        getMenuSelection();
    });
}

function getInternInfo() {
    return inquirer.prompt([{
        type: 'text',
        name: 'name',
        message: 'What is your name?',
        validate: nameInputIntern => {
            if (nameInputIntern) {
                return true;
            } else {
                console.log('Please enter your name!');
                return false;
            }
        }
    },
    {
        type: 'text',
        name: 'employeeId',
        message: 'What is your employee ID?',
        validate: internIdInput => {
            if (internIdInput) {
                return true;
            } else {
                console.log('Please enter your employee ID!');
                return false;
            }
        }
    },
    {
        tpye: 'text',
        name: 'email',
        message: 'What is your email address?',
        validate: internEmailInput => {
            if (internEmailInput) {
                return true;
            } else {
                console.log('Please enter your email address!');
                return false;
            }
        }
    },
    {
        type: 'text',
        name: 'gitHubUserName',
        message: 'what is your GitHub username?',
        validate: internGitHubInput => {
            if (internGitHubInput) {
                return true;
            } else {
                console.log('Please enter your GitHub username!');
                return false;
            }
        }
    }
    ])
    .then(({ name, email, employeeId, gitHubUsername }) => {
        let intern = new Intern(name, email, employeeId, gitHubUsername);
        employeeArr.push(intern);

        getMenuSelection();
    });
}

function finishApp() {
    console.log(employeeArr);
    //generate html
    
    let generateApp = generateTeam(employeeArr);
    fs.writeFile('index.html', generateApp, err => {
        if(err) {
            console.log(err);
        } else {
            console.log('File written successfully!');
        }
    })

}

getManagerInfo();

function generateTeam(team) {
    return `<html>hello aerrrryyyyybodddy<html>`;
}