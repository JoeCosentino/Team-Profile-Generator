const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, email, employeeId, gitHubUsername) {
        super(name, email, employeeId);
        this.gitHubUsername = gitHubUsername;
    }

    getGitHubUsername() {
        return this.gitHubUsername;
    }

    getRole() {
        return 'intern';
    }
}


module.exports = Intern;