const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, employeeId, email, gitHubUsername) {
        super(name, email, employeeId);
        this.gitHubUsername = gitHubUsername;
    }
}

module.exports = Engineer;