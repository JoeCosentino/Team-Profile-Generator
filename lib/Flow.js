const inquirer = require('inquirer');
const Employee = require('./Employee');
const Manager = require('./Manager');
const Engineer = require('./Engineer');
const Intern = require('./Intern');

class Flow {
    constructor() {
        const employeeArr = [];
    }
    getManagerInfo() {
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
                this.manager = new Manager(name, email, employeeId, officeNumber)

                this.getMenuSelection();
            });
    }       

    getMenuSelection() {
        return inquirer.prompt([{
            type: 'list',
            name: 'action',
            message: 'Choose an option to continue',
            choices: ['Engineer', 'Intern', 'Finish']
        }])
        .then(({ action }) => {
            if(action === 'Engineer') {
                this.getEnginnerInfo();
            } else if (action === 'Intern') {
                this.getInternInfo();
            } else {
                this.finishApp();
            }
        });
    }

    getEnginnerInfo() {
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
            this.engineer = new Engineer(name, email, employeeId, gitHubUsername)

            this.getMenuSelection();
        });
    }

    getInternInfo() {
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
            this.intern = new Intern(name, email, employeeId, gitHubUsername)

            this.getMenuSelection();
        });
    }

    finishApp() {
        // use this function to write the file, maybe use a new file.
        const callWriteFile = pageHTML => {
            return pageHTML;
        }

        callWriteFile()
        .then(pageHTML => {
            return writeFile(pageHTML)
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
    }
}



module.exports = Flow;