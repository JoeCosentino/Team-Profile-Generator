const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, email, employeeId, officeNumber) {
        super(name, email, employeeId);
        this.officeNumber = officeNumber;
    }

    getOfficeNumber() {
        return this.officeNumber;
    }

    getRole() {
        return 'Manager';
    }
}



module.exports = Manager;