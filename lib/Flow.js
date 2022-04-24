const inquirer = require('inquirer');
const Employee = require('./Employee');
const Intern = require('./Intern');
const Manager = require('./Manager');
const Engineer = require('./Engineer');

class Flow {
    getManagerInfo() {
        inquirer
            .prompt({
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
                name: 'Office Number',
                message: 'Please enter your office number',
                validate: officeNumberInput => {
                    if (officeNumberInput) {
                        return true;
                    } else {
                        console.log('Please enter your office number!');
                        return false;
                    }
                }
            }
            )
            // .then(({ name }) => {
            //     this.player = new Player(name);
            //     this.startNewBattle();
            // });
    }        
}

module.exports = Flow;