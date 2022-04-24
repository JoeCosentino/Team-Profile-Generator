const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, email, employeeId, gitHubUsername) {
        super(name, email, employeeId);
        this.gitHubUsername = gitHubUsername;
    }
}



module.exports = Intern;